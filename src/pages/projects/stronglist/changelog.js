import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import LanguageNav, { StrongListDocument } from '../../../components/StrongListDocument'

const ChangelogPage = () => (
  <StrongListDocument>
    <Helmet
      title="StrongList updates - Roberto Vázquez González Site"
      meta={[
        {
          name: 'description',
          content: 'What changed in each version of the StrongList iOS app. English and Spanish.',
        },
      ]}
    />
    <h2 className="general__pageTitle">StrongList updates</h2>
    <LanguageNav />

    <section id="en" lang="en">
      <h1>StrongList updates</h1>
      <p>
        What changed in each version, in plain words. Back to{' '}
        <Link to="/projects/stronglist/">StrongList</Link>.
      </p>

      <h2>Version 1.1</h2>
      <h3>New</h3>
      <ul>
        <li>
          Progress charts for each exercise. Tap a strength exercise in Progress to see your
          weight and reps over time, and how much you have improved since the first session of
          the period and since the previous one. Choose a month, three months, a year or
          everything.
        </li>
        <li>
          Add an exercise just for today. During a workout, add an extra exercise to the current
          session without changing your plan. It is saved in your history like any other.
        </li>
        <li>
          Machine numbers everywhere. If a gym has numbered machines, the number now shows next to
          the exercise in your plan, during the workout, in Progress and on the Lock Screen.
        </li>
      </ul>
      <h3>Improved</h3>
      <ul>
        <li>
          Better exercise search. It filters as you type, ignores accents and capitals, matches
          words in any order, and finds exercises by their English or Spanish name.
        </li>
      </ul>
      <h3>Fixed</h3>
      <ul>
        <li>
          Exercises created by importing a routine, when their name was not in the catalog, could
          not be picked again when adding exercises. They now appear in the list and in search.
        </li>
      </ul>

      <h2>Version 1.0</h2>
      <p>November 6, 2026. First release on the App Store.</p>
    </section>

    <section id="es" lang="es">
      <h1>Novedades de StrongList</h1>
      <p>
        Qué cambia en cada versión, sin rodeos. Volver a{' '}
        <Link to="/projects/stronglist/">StrongList</Link>.
      </p>

      <h2>Versión 1.1</h2>
      <h3>Nuevo</h3>
      <ul>
        <li>
          Gráficas de progreso por ejercicio. Toca un ejercicio de fuerza en Progreso para ver tu
          peso y tus repeticiones a lo largo del tiempo, y cuánto has mejorado desde la primera
          sesión del periodo y desde la anterior. Elige un mes, tres meses, un año o todo.
        </li>
        <li>
          Añade un ejercicio solo para hoy. Durante un entrenamiento, añade un ejercicio extra a la
          sesión actual sin cambiar tu plan. Se guarda en tu historial como cualquier otro.
        </li>
        <li>
          Números de máquina en todas partes. Si un gimnasio tiene máquinas numeradas, el número
          aparece junto al ejercicio en tu plan, durante el entrenamiento, en Progreso y en la
          pantalla de bloqueo.
        </li>
      </ul>
      <h3>Mejorado</h3>
      <ul>
        <li>
          Mejor búsqueda de ejercicios. Filtra mientras escribes, ignora acentos y mayúsculas,
          encuentra las palabras en cualquier orden y busca por el nombre en español o en inglés.
        </li>
      </ul>
      <h3>Corregido</h3>
      <ul>
        <li>
          Los ejercicios creados al importar una rutina, cuando su nombre no estaba en el catálogo,
          no se podían volver a elegir al añadir ejercicios. Ahora aparecen en la lista y en la
          búsqueda.
        </li>
      </ul>

      <h2>Versión 1.0</h2>
      <p>6 de noviembre de 2026. Primera versión en el App Store.</p>
    </section>
  </StrongListDocument>
)

export default ChangelogPage
