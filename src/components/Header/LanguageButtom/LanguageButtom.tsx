import React, { useEffect, useState } from 'react'
import { SettingsRepository } from '../../../data/repository/SettingsRepository';
import './LanguageButtom.css'

interface ILanguageButtom {
    hidden: boolean;
}

export default function LanguageButtom({hidden}: ILanguageButtom) {

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const language = SettingsRepository.getLanguage();
    setChecked(language === "EN" ? true : false);
  }, [])
  

  const languageSelector = () => {
    setChecked(!checked);
    const language: string|undefined = SettingsRepository.getLanguage();
    changeLanguage(language);
  }

  const changeLanguage = (language: string|undefined) => {
    let newLanguage: string;
    switch (language) {
        case "ES":
          newLanguage = "EN";
          break;
        default:
          newLanguage = "ES";
      }
      SettingsRepository.setLanguage(newLanguage);
      location.reload();
  }

  return (
    <div hidden={hidden} className="central">
        <p>ES</p>
        <div className="cl-toggle-switch" >
            <label className="cl-switch">
                <input type="checkbox" onClick={languageSelector} readOnly checked={checked}/>
                <span></span>
            </label>
        </div>
        <p>EN</p>
    </div>
  )
}
