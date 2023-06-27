import React, { useEffect, useState, useContext } from "react";
import { loadLayersModel, tensor2d, sub } from '@tensorflow/tfjs';
import { toast } from "react-toastify";
import Popup from 'reactjs-popup';

// INTERNAL IMPORT
import Style from "../styles/useTokenDiabetesPredict.module.css";
import { Button, Guard } from "../components/componentsindex.js";
import formStyle from "../utils/form/Form.module.css";

// SMART CONTRACT IMPORT
import { DataMarketplaceContext } from "../Context/DataMarketplaceContext";

const useTokenDiabetesPredict = () => {
  const { hasTokenFromOwner } = useContext(DataMarketplaceContext);
  const [gender, setGender] = useState(null);
  const [age, setAge] = useState(null);
  const [hypertension, setHypertension] = useState(null);
  const [heartDisease, setHeartDisease] = useState(null);
  const [smokingHistory, setSmokingHistory] = useState(null);
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [hbA1cLevel, setHbA1cLevel] = useState(null);
  const [bloodGlucoseLevel, setBloodGlucoseLevel] = useState(null);
  const [model, setModel] = useState(null);
  const [scaler, setScaler] = useState(null);
  const [predictionResult, setPredictionResult] = useState(null);

  useEffect(() => {
    async function loadScaler() {
      const response = await fetch('/model/scaler_params.json');
      const scalerData = await response.json();
      setScaler(scalerData);
    }
    loadScaler();
  }, []);

  useEffect(() => {
    async function loadModel() {
      const loadedModel = await loadLayersModel('/model/model.json');
      setModel(loadedModel);
    }
    loadModel();
  }, []);

  async function predict() {
    if (model && scaler && (await hasTokenFromOwner())) {
      if (
        gender !== null &&
        age !== null &&
        hypertension !== null &&
        heartDisease !== null &&
        smokingHistory !== null &&
        weight !== null &&
        height !== null
      ) {
        const bmi = Math.round((weight / (height * height / 10000)) * 100) / 100;
        let gen;
        if (gender === "Male") gen = 1;
        else if (gender === "Female") gen = 0;
        else gen = 2;

        let smokingH;
        if (smokingHistory === "No info") smokingH = 0;
        else if (smokingHistory === "Never") smokingH = 1;
        else if (smokingHistory === "Former") smokingH = 2;
        else if (smokingHistory === "Current") smokingH = 4;
        else if (smokingHistory === "Not current") smokingH = 3;
        else smokingH = 5;

        let hypert;
        if (hypertension === "true") hypert = 1;
        else hypert = 0;
        let heartD;
        if (heartDisease === "true") heartD = 1;
        else heartD = 0;
        let bloodG = bloodGlucoseLevel
        if (bloodGlucoseLevel == null) bloodG = scaler.feature_means[7]
        let hbA1c = hbA1cLevel;
        if (hbA1cLevel == null) hbA1c = scaler.feature_means[6]
        const customInputData = [
          Number(gen),
          Number(age),
          Number(hypert),
          Number(heartD),
          Number(smokingH),
          Number(bmi),
          Number(hbA1c),
          Number(bloodG),
        ];
        const customInput = tensor2d([customInputData]);
        const mean = scaler.mean;
        const std = scaler.var.map(Math.sqrt);
        const customInputScaled = sub(customInput, mean).div(std);
        const prediction = model.predict(customInputScaled);
        const probability = prediction.dataSync()[0];
        const formattedNumber = (probability * 100).toFixed(2) + "%";
        if (probability >= 0.5) {
          setPredictionResult("Prediction: The person has diabetes. The response being " + formattedNumber + " positive");
        } else {
          setPredictionResult("Prediction: The person does not have diabetes.");
        }
      } else {
        toast.error("Please insert all data!", {
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      toast.error(
        "The service is not working right now, please try again later or reload the page!",
        {
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
  }

  const content = <div className={Style.useTokenDiabetesPredict}>
    <p className={Style.Form_title}>Check the possibility of having diabetes by entering the following parameters:</p>
    <div className={Style.Form_box}>
      <div className={Style.Form_box_row}>
        <div className={Style.Form_box_col}>
          <div className={Style.Form_box_input_social}>
            <div className={formStyle.Form_box_input}>
              <label htmlFor="Gender">Gender</label>
              <select className={Style.Form_box_select}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Choose gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
              <p className={Style.Form_box_input_paragraph}>Gender refers to the biological sex of the individual, which can have an impact on their susceptibility to diabetes.</p>
            </div>
          </div>
        </div>
        <div className={Style.Form_box_col}>
          <div className={Style.Form_box_input_social}>
            <div className={formStyle.Form_box_input}>
              <label htmlFor="Age">Age</label>
              <div className={Style.Form_box_input_box}>
                <input
                  type="number"
                  placeholder="Set Age"
                  onChange={(e) => setAge(e.target.value)}
                  step="0.01" />
              </div>
              <p className={Style.Form_box_input_paragraph}>Age is an important factor as diabetes is more commonly diagnosed in older adults.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.Form_box_row}>
        <div className={Style.Form_box_col}>
          <div className={Style.Form_box_input_social}>
            <div className={formStyle.Form_box_input}>
              <label htmlFor="Hypertension">Hypertension</label>
              <select className={Style.Form_box_select}
                onChange={(e) => setHypertension(e.target.value)}
              >
                <option value="">Do you have hypertension?</option>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
              <p className={Style.Form_box_input_paragraph}>Hypertension is a medical condition in which the blood pressure in the arteries is persistently elevated.</p>
            </div>
          </div>
        </div>
        <div className={Style.Form_box_col}>
          <div className={Style.Form_box_input_social}>
            <div className={formStyle.Form_box_input}>
              <label htmlFor="HeartDisease">Heart Disease</label>
              <select className={Style.Form_box_select}
                onChange={(e) => setHeartDisease(e.target.value)}
              >
                <option value="">Do you have heart disease?</option>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
              <p className={Style.Form_box_input_paragraph}>Heart disease is another medical condition that is associated with an increased risk of developing diabetes.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.Form_box_row}>
        <div className={Style.Form_box_col}>
          <div className={Style.Form_box_input_social}>
            <div className={formStyle.Form_box_input}>
              <label htmlFor="SmokingHistory">Smoking History</label>
              <select className={Style.Form_box_select}
                onChange={(e) => setSmokingHistory(e.target.value)}
              >
                <option value="">Choose smoking history</option>
                <option value="No info">No info</option>
                <option value="Never">Never</option>
                <option value="Former">Former</option>
                <option value="Current">Current</option>
                <option value="Not current">Not current</option>
                <option value="Ever">Ever</option>
              </select>
              <p className={Style.Form_box_input_paragraph}>Smoking history is also considered a risk factor for diabetes and can exacerbate the complications associated.</p>
            </div>
          </div>
        </div>
        <div className={Style.Form_box_col}>
          <div className={Style.Form_box_input_social}>
            <div className={formStyle.Form_box_input}>
              <label htmlFor="BloodGlucoseLevel">Blood Glucose Level</label>
              <div className={Style.Form_box_input_box}>
                <input
                  type="number"
                  placeholder="Leave empty if you do not know the value"
                  onChange={(e) => setBloodGlucoseLevel(e.target.value)}
                  step="0.01" />
              </div>
              <p className={Style.Form_box_input_paragraph}>Blood glucose level refers to the amount of glucose in the bloodstream at a given time.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.Form_box_row}>
        <div className={Style.Form_box_col}>
          <div className={Style.Form_box_input_social}>
            <div className={formStyle.Form_box_input}>
              <label htmlFor="HbA1cLevel">HbA1c Level</label>
              <div className={Style.Form_box_input_box}>
                <input
                  type="number"
                  placeholder="Leave empty if you do not know the value"
                  onChange={(e) => setHbA1cLevel(e.target.value)}
                  step="0.01" />
              </div>
              <p className={Style.Form_box_input_paragraph}>HbA1c (Hemoglobin A1c) level is a measure of a person's average blood sugar level over the past 2-3 months.</p>
            </div>
          </div>
        </div>
        <div className={Style.Form_box_col}>
          <div className={Style.Form_box_input_social}>
            <div className={formStyle.Form_box_input}>
              <label htmlFor="Height">Height</label>
              <div className={Style.Form_box_input_box}>
                <input
                  type="number"
                  placeholder="Enter the height in cm"
                  onChange={(e) => setHeight(e.target.value)}
                  step="0.01" />
              </div>
              <p className={Style.Form_box_input_paragraph}>Height is an important factor as certain height-related health conditions are more commonly diagnosed in individuals who are taller.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.Form_box_row}>
        <div className={Style.Form_box_col}></div>
        <div className={Style.Form_box_col}>
          <div className={Style.Form_box_input_social}>
            <div className={formStyle.Form_box_input}>
              <label htmlFor="Weight">Weight</label>
              <div className={Style.Form_box_input_box}>
                <input
                  type="number"
                  placeholder="Enter the weight in kg"
                  onChange={(e) => setWeight(e.target.value)}
                  step="0.01" />
              </div>
              <p className={Style.Form_box_input_paragraph}>Weight is an important factor as diabetes is more commonly diagnosed in individuals with higher body weights.</p>
            </div>
          </div>
        </div>

      </div><div className={Style.Form_box_row}>
        <div className={Style.Form_box_col}>
          <div className={Style.upload_box_btn}>
            <Button
              btnName="Check"
              handleClick={() => { predict(); }}
              classStyle={Style.upload_box_btn_style} />
          </div></div>
        <div className={Style.Form_box_col}></div>
      </div>
    </div>
    {/* Popup */}
    <Popup open={predictionResult !== null} onClose={() => setPredictionResult(null)}>
      <div className={Style.Form_box_popup}>
        <h3>Prediction Result:</h3>
        <h2>{predictionResult}</h2>
        <h6>note: keep in mind that if you did not enter all the values or the values were entered incorrectly, the answer may contain small errors!</h6>
      </div>
    </Popup>
  </div>;
  return (
    <Guard children={content}>
    </Guard>
  );
};

export default useTokenDiabetesPredict;
