import React, { useEffect, useState, useContext } from "react";
import { loadLayersModel, tensor2d, sub } from '@tensorflow/tfjs';
import { toast } from "react-toastify";

//INTERNAL IMPORT
import Style from "../styles/useTokenDiabetesPredict.module.css";
import { Button, Guard} from "../components/componentsindex.js";

//SMART CONTRACT IMPORT
import { DataMarketplaceContext } from "../Context/DataMarketplaceContext";

const useTokenDiabetesPredict = () => {
  const { hasTokenFromOwner } = useContext(DataMarketplaceContext);
  const [pregnancies, setPregnancies] = useState(null)
  const [glucose, setGlucose] = useState(null)
  const [bloodPressure, setBloodPressure] = useState(null)
  const [skinThickness, setSkinThickness] = useState(null)
  const [insulin, setInsulin] = useState(null)
  const [BMI, setBMI] = useState(null)
  const [diabetesPedigreeFunction, setDiabetesPedigreeFunction] = useState(null)
  const [age, setAge] = useState(null)
  const [model, setModel] = useState(null);

  useEffect(() => {
    async function loadModel() {
      const loadedModel = await loadLayersModel('/model/model1.json');
      setModel(loadedModel);
    }
    loadModel();
  }, []);

  async function predict() {
    if (model && await hasTokenFromOwner()) {
      if (
        pregnancies !== null &&
        glucose !== null &&
        bloodPressure !== null &&
        skinThickness !== null &&
        insulin !== null &&
        BMI !== null &&
        diabetesPedigreeFunction !== null &&
        age !== null
      ) {
        const customInputData = [
          Number(pregnancies),
          Number(glucose),
          Number(bloodPressure),
          Number(skinThickness),
          Number(insulin),
          Number(BMI),
          Number(diabetesPedigreeFunction),
          Number(age),
        ];
        // custom_input = [[2,197,70,99,0,34.7,0.575,62]]
        const customInput = tensor2d([customInputData]);
        const mean = [3.845052, 120.894531, 69.105469, 20.536458, 79.799479, 31.992578, 0.471876, 33.240885];
        const std = [3.369578, 31.972618, 19.355807, 15.952218, 115.244002, 7.884160, 0.331329, 11.760232];
        // Efectuați scalarea datelor pentru predicție
        const customInputScaled = sub(customInput, mean).div(std);
        console.log(customInputScaled)
        // Realizați predicția
        const prediction = model.predict(customInputScaled);

        // Obțineți eticheta prezisă
        const predictedLabel = prediction.argMax(1).dataSync()[0];

        // Afișați rezultatul predicției
        if (predictedLabel === 1) {
          console.log("Predicție: Persoana prezintă diabet");
        } else {
          console.log("Predicție: Persoana nu prezintă diabet");
        }
      }else{
        toast.error("Please insert all data!", {
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }else{
      toast.error("The service is not working right now, please try again later or reload the page!", {
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  const content = <div className={Style.useTokenDiabetesPredict}>
    <div className={Style.Form_box}>
      <div className={Style.Form_box_row}>
        <div className={Style.Form_box_col}>
          <div className={Style.Form_box_input_social}>
            <div className={Style.Form_box_input}>
              <label htmlFor="Pregnancies">Pregnancies</label>
              <div className={Style.Form_box_input_box}>
                <input
                  type="number"
                  placeholder="Pregnancies"
                  onChange={(e) => setPregnancies(e.target.value)} 
                  step="0.01" />
              </div>
            </div>
          </div>
        </div>
        <div className={Style.Form_box_col}>
          <div className={Style.Form_box_input_social}>
            <div className={Style.Form_box_input}>
              <label htmlFor="Glucose">Glucose</label>
              <div className={Style.Form_box_input_box}>
                <input
                  type="number"
                  placeholder="Glucose"
                  onChange={(e) => setGlucose(e.target.value)} 
                  step="0.01" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.Form_box_row}>
        <div className={Style.Form_box_col}>
          <div className={Style.Form_box_input_social}>
            <div className={Style.Form_box_input}>
              <label htmlFor="BloodPressure">BloodPressure</label>
              <div className={Style.Form_box_input_box}>
                <input
                  type="number"
                  placeholder="BloodPressure"
                  onChange={(e) => setBloodPressure(e.target.value)}
                  step="0.01" />
              </div>
            </div>
          </div>
        </div>
        <div className={Style.Form_box_col}>
          <div className={Style.Form_box_input_social}>
            <div className={Style.Form_box_input}>
              <label htmlFor="SkinThickness">SkinThickness</label>
              <div className={Style.Form_box_input_box}>
                <input
                  type="number"
                  placeholder="SkinThickness"
                  onChange={(e) => setSkinThickness(e.target.value)}
                  step="0.01" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.Form_box_row}>
        <div className={Style.Form_box_col}>
          <div className={Style.Form_box_input_social}>
            <div className={Style.Form_box_input}>
              <label htmlFor="Insulin">Insulin</label>
              <div className={Style.Form_box_input_box}>
                <input
                  type="number"
                  placeholder="Insulin"
                  onChange={(e) => setInsulin(e.target.value)}
                  step="0.01" />
              </div>
            </div>
          </div>
        </div>
        <div className={Style.Form_box_col}>
          <div className={Style.Form_box_input_social}>
            <div className={Style.Form_box_input}>
              <label htmlFor="BMI">BMI</label>
              <div className={Style.Form_box_input_box}>
                <input
                  type="number"
                  placeholder="BMI"
                  onChange={(e) => setBMI(e.target.value)}
                  step="0.01" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.Form_box_row}>
        <div className={Style.Form_box_col}>
          <div className={Style.Form_box_input_social}>
            <div className={Style.Form_box_input}>
              <label htmlFor="DiabetesPedigreeFunction">DiabetesPedigreeFunction</label>
              <div className={Style.Form_box_input_box}>
                <input
                  type="number"
                  placeholder="DiabetesPedigreeFunction"
                  onChange={(e) => setDiabetesPedigreeFunction(e.target.value)}
                  step="0.01" />
              </div>
            </div>
          </div>
        </div>
        <div className={Style.Form_box_col}>
          <div className={Style.Form_box_input_social}>
            <div className={Style.Form_box_input}>
              <label htmlFor="Age">Age</label>
              <div className={Style.Form_box_input_box}>
                <input
                  type="number"
                  placeholder="Age"
                  onChange={(e) => setAge(e.target.value)}
                  step="0.01" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={Style.upload_box_btn}>
      <Button
        btnName="Check"
        handleClick={() => { predict(); } }
        classStyle={Style.upload_box_btn_style} />
    </div>
  </div>;
  return (
    <Guard children={content}>
    </Guard>
  );
};

export default useTokenDiabetesPredict;
