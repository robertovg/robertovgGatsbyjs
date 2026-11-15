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
          Charts for every exercise. Tap an exercise in Progress to see your weight and reps over
          time. Cardio and mobility chart time, plus distance and level when you log them. Choose a
          month, three months, a year or everything.
        </li>
        <li>
          What changed, at a glance. Each row in Progress shows a small coloured percentage for each
          figure that changed: against the previous session or, in Week and Month, against the
          previous period. Week and Month list each exercise once, with its best session.
        </li>
        <li>
          Training calendar. Swipe left in Progress to see your year as a calendar, coloured by the
          sessions on each day, with the days trained this year and your current streak. Tap a day
          to open that session.
        </li>
        <li>
          Level for cardio and mobility. Log the machine level (bike, elliptical) next to time and
          distance, and set it as a target in your plan if you like.
        </li>
        <li>
          Add an exercise just for today. During a workout, add an extra exercise to the current
          session without changing your plan. It is saved in your history like any other.
        </li>
        <li>
          Machine numbers everywhere. If a gym has numbered machines, the number now shows next to
          the exercise in your plan, the exercise list, during the workout, in Progress and on the
          Lock Screen.
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
        <li>
          Picking an exercise you already have reuses it instead of creating a copy, and Progress
          joins the history of the same exercise written differently (capitals, accents, English or
          Spanish).
        </li>
        <li>
          Editing a past session lists its exercises in the same order as the workout and Progress.
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
          Gráficas por ejercicio. Toca un ejercicio en Progreso para ver tu peso y tus repeticiones
          a lo largo del tiempo. En cardio y movilidad, el tiempo, y también la distancia y el nivel
          si los apuntas. Elige un mes, tres meses, un año o todo.
        </li>
        <li>
          Qué ha cambiado, de un vistazo. Cada fila de Progreso muestra un pequeño porcentaje de
          color por cada dato que ha cambiado: frente a la sesión anterior o, en Semana y Mes,
          frente al periodo anterior. Semana y Mes muestran cada ejercicio una vez, con su mejor
          sesión.
        </li>
        <li>
          Calendario de entrenos. Desliza a la izquierda en Progreso para ver tu año en un
          calendario, coloreado según las sesiones de cada día, con los días entrenados este año y
          tu racha actual. Toca un día para abrir esa sesión.
        </li>
        <li>
          Nivel en cardio y movilidad. Apunta el nivel de la máquina (bici, elíptica) junto al
          tiempo y la distancia, y ponlo como objetivo en el plan si quieres.
        </li>
        <li>
          Añade un ejercicio solo para hoy. Durante un entrenamiento, añade un ejercicio extra a la
          sesión actual sin cambiar tu plan. Se guarda en tu historial como cualquier otro.
        </li>
        <li>
          Números de máquina en todas partes. Si un gimnasio tiene máquinas numeradas, el número
          aparece junto al ejercicio en tu plan, en la lista de ejercicios, durante el
          entrenamiento, en Progreso y en la pantalla de bloqueo.
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
        <li>
          Elegir un ejercicio que ya tienes lo reutiliza en lugar de crear una copia, y Progreso
          junta el historial del mismo ejercicio escrito de otra forma (mayúsculas, acentos, español
          o inglés).
        </li>
        <li>
          Al editar una sesión pasada, sus ejercicios salen en el mismo orden que en el
          entrenamiento y en Progreso.
        </li>
      </ul>

      <h2>Versión 1.0</h2>
      <p>6 de noviembre de 2026. Primera versión en el App Store.</p>
    </section>
  </StrongListDocument>
)

export default ChangelogPage
