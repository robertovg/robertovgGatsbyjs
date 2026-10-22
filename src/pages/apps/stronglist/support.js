import React from 'react'
import Helmet from 'react-helmet'
import LanguageNav, {
  Placeholder,
  StrongListDocument,
} from '../../../components/StrongListDocument'

const contactEmail = 'stronglist@robertovg.com'
const privacyUrl = 'https://robertovg.com/apps/stronglist/privacy'

const SupportPage = () => (
  <StrongListDocument>
    <Helmet
      title="StrongList support - Roberto Vázquez González Site"
      meta={[
        { name: 'robots', content: 'noindex' },
        {
          name: 'description',
          content: 'Support for the StrongList iOS app. English and Spanish.',
        },
      ]}
    />
    <h2 className="general__pageTitle">StrongList support</h2>
    <LanguageNav />

    <section id="en" lang="en">
      <h1>StrongList support</h1>
      <p>
        StrongList is a simple workout log for iPhone and iPad. Questions, bugs or ideas: write
        to{' '}
        <strong>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </strong>.{' '}
        <Placeholder>
          [Optional, as required by local law: postal address / phone.]
        </Placeholder>{' '}
        I read every message and usually reply within <Placeholder>[X days]</Placeholder>.
      </p>
      <p>
        When you report a problem, it helps to include your device (iPhone or iPad), iOS version
        and the StrongList version shown at the bottom of Settings.
      </p>
      <p>
        Privacy policy: <a href={privacyUrl}>{privacyUrl}</a>
      </p>

      <h2>Frequently asked questions</h2>

      <h3>How does iCloud sync work? Can I turn it off?</h3>
      <p>
        StrongList keeps your data on your device and, by default, syncs it through your own iCloud
        Drive so your iPhone and iPad stay in step. You can turn sync off, check its status, or tap
        &quot;Sync now&quot; in StrongList › Settings › iCloud. If two devices change the same
        item, StrongList shows you the conflict. The copy you don&apos;t keep is saved in a
        &quot;Conflicts&quot; folder and can be restored from Settings. Without an iCloud account,
        StrongList still works, it just doesn&apos;t sync.
      </p>

      <h3>Where are my files?</h3>
      <p>
        With sync on, in Files › iCloud Drive › StrongList, as readable JSON files. There is no
        StrongList account and no server: nobody else has a copy.
      </p>

      <h3>Can I use pounds instead of kilograms?</h3>
      <p>
        Yes. Settings › weight unit: kg or lb. StrongList stores weights in kilograms and converts
        what it shows, so you can switch whenever you like.
      </p>

      <h3>How do I import a routine from my trainer?</h3>
      <p>
        While creating a new plan, open the import section and tap &quot;Copy prompt&quot;. Paste
        the prompt into the AI app you use, together with a photo or the text of your routine, then
        copy its reply and paste it into StrongList. StrongList has no built-in AI and sends
        nothing anywhere.
      </p>
      <p>
        The reply needs one exercise per line, with fields separated by <code>|</code>:
      </p>
      <p>
        <code>
          name | muscle group | sets | reps | weight in kg | machine number (optional)
        </code>
      </p>
      <p>Tips:</p>
      <ul>
        <li>
          Import is only available when creating a plan. To change an existing plan, edit it
          directly.
        </li>
        <li>Weight is read as kilograms, even if your app is set to lb.</li>
        <li>
          Lines whose muscle group isn&apos;t recognised are skipped. Cardio and mobility exercises
          aren&apos;t part of the import, so add those by hand.
        </li>
        <li>Machine numbers are kept only if your current gym numbers its machines.</li>
      </ul>

      <h3>Does StrongList work on iPad?</h3>
      <p>
        Yes, in any orientation. On iPad in landscape, Train and Progress are shown side by side.
      </p>

      <h3>Which languages are available?</h3>
      <p>
        Spanish and English. StrongList follows your device language (or Spanish if your device
        uses another language), and you can change it in StrongList › Settings.
      </p>

      <h3>Why don&apos;t I see the workout on my Lock Screen?</h3>
      <p>
        StrongList shows the workout in progress as a Live Activity on the Lock Screen and, on
        iPhones that have it, in the Dynamic Island. If you don&apos;t see it, check that Live
        Activities are allowed for StrongList in iOS Settings › StrongList.
      </p>

      <h3>How much does it cost? Is there a subscription?</h3>
      <p>
        You pay once on the App Store. No subscription, no in-app purchases, no ads. Every feature
        is included.
      </p>

      <h3>Does StrongList connect to Apple Health?</h3>
      <p>No. StrongList is a training log. It doesn&apos;t read or write Apple Health data.</p>

      <h3>How do I delete my data?</h3>
      <p>
        Delete sessions from Progress, and archive then delete plans in Train. Deleting the app
        removes its data from that device. If you used iCloud sync, also delete the StrongList
        folder in Files › iCloud Drive.
      </p>
    </section>

    <section id="es" lang="es">
      <h1>Soporte de StrongList</h1>
      <p>
        StrongList es un diario de entrenamiento sencillo para iPhone y iPad. Para dudas, errores o
        ideas, escribe a{' '}
        <strong>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </strong>.{' '}
        <Placeholder>
          [Opcional, si lo exige la ley local: dirección postal / teléfono.]
        </Placeholder>{' '}
        Leo todos los mensajes y suelo responder en <Placeholder>[X días]</Placeholder>.
      </p>
      <p>
        Si nos cuentas un problema, ayuda mucho que indiques el dispositivo (iPhone o iPad), la
        versión de iOS y la versión de StrongList que aparece al final de Ajustes.
      </p>
      <p>
        Política de privacidad: <a href={privacyUrl}>{privacyUrl}</a>
      </p>

      <h2>Preguntas frecuentes</h2>

      <h3>¿Cómo funciona la sincronización con iCloud? ¿Puedo desactivarla?</h3>
      <p>
        StrongList guarda tus datos en el dispositivo y, por defecto, los sincroniza con tu propio
        iCloud Drive para que el iPhone y el iPad estén al día. Puedes desactivarla, ver su estado
        o pulsar &quot;Sincronizar ahora&quot; en StrongList › Ajustes › iCloud. Si dos dispositivos
        cambian lo mismo, StrongList te enseña el conflicto. La copia que no te quedas se guarda en
        una carpeta &quot;Conflicts&quot; y puedes recuperarla desde Ajustes. Sin cuenta de iCloud,
        StrongList funciona igual, solo que no sincroniza.
      </p>

      <h3>¿Dónde están mis archivos?</h3>
      <p>
        Con la sincronización activada, en Archivos › iCloud Drive › StrongList, como archivos JSON
        legibles. No hay cuenta de StrongList ni servidor: nadie más tiene una copia.
      </p>

      <h3>¿Puedo usar libras en vez de kilos?</h3>
      <p>
        Sí. En Ajustes › unidad de peso: kg o lb. StrongList guarda los pesos en kilos y convierte
        lo que muestra, así que puedes cambiar cuando quieras.
      </p>

      <h3>¿Cómo importo la rutina de mi entrenador?</h3>
      <p>
        Al crear un plan nuevo, abre la sección de importar y pulsa &quot;Copiar prompt&quot;. Pega
        las instrucciones en la app de IA que uses junto con una foto o el texto de tu rutina,
        copia su respuesta y pégala en StrongList. StrongList no lleva IA integrada ni envía nada a
        ningún sitio.
      </p>
      <p>
        La respuesta tiene que tener un ejercicio por línea, con los campos separados por{' '}
        <code>|</code>:
      </p>
      <p>
        <code>
          nombre | grupo muscular | series | repeticiones | peso en kg | número de máquina
          (opcional)
        </code>
      </p>
      <p>Consejos:</p>
      <ul>
        <li>
          Solo se puede importar al crear un plan. Para cambiar un plan que ya tienes, edítalo
          directamente.
        </li>
        <li>El peso se lee siempre en kilos, aunque tengas la app en lb.</li>
        <li>
          Las líneas cuyo grupo muscular no se reconoce se saltan. Los ejercicios de cardio y
          movilidad no entran en la importación: añádelos a mano.
        </li>
        <li>
          Los números de máquina solo se guardan si tu gimnasio actual tiene las máquinas
          numeradas.
        </li>
      </ul>

      <h3>¿Funciona en el iPad?</h3>
      <p>
        Sí, en cualquier orientación. En el iPad en horizontal, Entrenar y Progreso se ven uno al
        lado del otro.
      </p>

      <h3>¿En qué idiomas está?</h3>
      <p>
        En español y en inglés. StrongList usa el idioma del dispositivo (o español si tu
        dispositivo está en otro idioma), y puedes cambiarlo en StrongList › Ajustes.
      </p>

      <h3>¿Por qué no veo el entreno en la pantalla bloqueada?</h3>
      <p>
        StrongList muestra el entreno en curso como actividad en directo en la pantalla bloqueada
        y, en los iPhone que la tienen, en la Dynamic Island. Si no aparece, comprueba que las
        actividades en directo están permitidas para StrongList en Ajustes de iOS › StrongList.
      </p>

      <h3>¿Cuánto cuesta? ¿Hay suscripción?</h3>
      <p>
        Pagas una vez en el App Store. Sin suscripción, sin compras dentro de la app y sin
        anuncios. Incluye todas las funciones.
      </p>

      <h3>¿Se conecta con la app Salud?</h3>
      <p>No. StrongList es un diario de entrenamiento: no lee ni escribe datos de Salud.</p>

      <h3>¿Cómo borro mis datos?</h3>
      <p>
        Elimina sesiones desde Progreso, y archiva y luego elimina planes en Entrenar. Al borrar la
        app se eliminan sus datos de ese dispositivo. Si usaste la sincronización con iCloud, borra
        también la carpeta StrongList en Archivos › iCloud Drive.
      </p>
    </section>
  </StrongListDocument>
)

export default SupportPage
