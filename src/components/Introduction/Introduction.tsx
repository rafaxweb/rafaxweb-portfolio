import React, { FC, useEffect, useState } from 'react'
import { Messages } from '../../data/Messages'
import { SettingsRepository } from '../../data/repository/SettingsRepository'

export default function Introduction() : JSX.Element {

  return (
    <>
      <h1>{Messages.Introduction.title.get(SettingsRepository.getLanguage())}</h1>
      <h2>{Messages.Introduction.subtitle.get(SettingsRepository.getLanguage())}</h2>
      <p>{Messages.Introduction.description.get(SettingsRepository.getLanguage())}</p>
    </>
  )
}
