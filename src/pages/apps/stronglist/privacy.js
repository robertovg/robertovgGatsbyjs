import React from 'react'
import Helmet from 'react-helmet'
import LanguageNav, {
  Placeholder,
  StrongListDocument,
} from '../../../components/StrongListDocument'

const contactEmail = 'stronglist@robertovg.com'

const PrivacyPage = () => (
  <StrongListDocument>
    <Helmet
      title="StrongList Privacy Policy - Roberto Vázquez González Site"
      meta={[
        { name: 'robots', content: 'noindex' },
        {
          name: 'description',
          content: 'Privacy policy for the StrongList iOS app. English and Spanish.',
        },
      ]}
    />
    <h2 className="general__pageTitle">StrongList privacy</h2>
    <LanguageNav />

    <section id="en" lang="en">
      <h1>StrongList Privacy Policy</h1>
      <div className="meta">
        <p>
          <strong>Effective date:</strong> <Placeholder>[YYYY-MM-DD]</Placeholder>
        </p>
        <p>
          <strong>Who is responsible:</strong>{' '}
          <Placeholder>[Controller name, e.g. Roberto Vázquez González]</Placeholder>,{' '}
          <Placeholder>[postal address, if you choose to publish one]</Placeholder>
        </p>
        <p>
          <strong>Contact:</strong> <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </p>
      </div>

      <h2>The short version</h2>
      <p>
        StrongList doesn&apos;t collect your data. There is no account, no analytics, no
        advertising, no tracking and no server of ours. The workouts you log stay on your device
        and, if iCloud sync is on, in your own iCloud Drive. We, the developer, never receive or
        see them.
      </p>

      <h2>What StrongList stores, and where</h2>
      <p>
        Everything you enter in StrongList is training data you type in yourself: gyms (name,
        whether machines are numbered, machine numbers), exercises and custom exercises (name,
        muscle group, type), plans (name, targets such as sets, reps, weight, duration and
        distance) and sessions (date, start and end time, gym, what you logged). StrongList has no
        free-text notes field, and it doesn&apos;t ask for your name, email, phone number, photos,
        contacts, location or health data.
      </p>
      <p>
        <strong>On your device.</strong> This data is kept in the app&apos;s local database on your
        iPhone or iPad. Your settings (language, kg/lb, default values, the gym you used last and
        similar preferences) are kept in the app&apos;s local settings.
      </p>
      <p>
        <strong>In your own iCloud Drive (optional).</strong> If iCloud sync is on, StrongList also
        writes your training data as readable JSON files to the app&apos;s folder in your iCloud
        Drive (Files › iCloud Drive › StrongList), so your devices stay in step. Sync is on by
        default and you can turn it off at any time in StrongList › Settings. These files live in
        your iCloud account, under Apple&apos;s terms and{' '}
        <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">
          Apple&apos;s Privacy Policy
        </a>. We can&apos;t access them.
      </p>
      <p>
        To tell your devices apart during sync, each file records when it was changed, the device
        type (&quot;iPhone&quot; or &quot;iPad&quot;) and a random identifier that StrongList
        creates on that device. That identifier is not your device&apos;s advertising ID or any
        Apple identifier, and it is only stored in your own files. On the device, StrongList also
        keeps a small sync status file that includes a one-way hash (SHA-256) of your iCloud
        identity token, so it can notice when you switch iCloud accounts. The token itself
        isn&apos;t stored, and StrongList never reads your Apple Account name or email.
      </p>
      <p>
        <strong>Live Activity.</strong> While a workout is running, StrongList can show it on the
        Lock Screen and in the Dynamic Island (plan name, elapsed time, progress and next
        exercise). That content stays on the device and ends when the workout ends. Anyone who can
        see your screen can see it. You can turn Live Activities off in iOS Settings.
      </p>

      <h2>Importing a routine with your own AI app</h2>
      <p>
        When you create a plan, StrongList can copy a ready-made prompt to your clipboard. If you
        choose to, you paste that prompt, together with a photo or text of your routine, into an AI
        app of your choice, then paste its reply back into StrongList. StrongList has no built-in
        AI and sends nothing in this process. The prompt contains no personal data. Whatever you
        share with the other app is handled by that app&apos;s provider under their own privacy
        policy.
      </p>

      <h2>What we don&apos;t do</h2>
      <ul>
        <li>No account or sign-in.</li>
        <li>No analytics, crash-reporting, advertising or other third-party SDKs.</li>
        <li>No tracking across apps or websites, and no data sold or shared with data brokers.</li>
        <li>
          No servers of our own: StrongList doesn&apos;t send your data to us or to anyone else.
          The only off-device copy is the optional sync to your own iCloud Drive.
        </li>
      </ul>

      <h2>Purchases and Apple services</h2>
      <p>
        StrongList is sold through the App Store. Apple handles payment, and we don&apos;t receive
        your payment details. Apple may provide developers with aggregated sales and usage reports,
        and with crash reports only if you have chosen to share them with developers in iOS
        Settings. That is governed by Apple&apos;s privacy policy.
      </p>

      <h2>Keeping and deleting your data</h2>
      <p>Your data stays until you delete it:</p>
      <ul>
        <li>
          In the app you can delete sessions, and archive and then delete plans. Custom exercises
          can be deleted in Settings.
        </li>
        <li>Deleting StrongList from a device removes its local data from that device.</li>
        <li>
          If you used iCloud sync, your files remain in your iCloud Drive until you delete them:
          open Files › iCloud Drive › StrongList, or manage the app&apos;s iCloud data in iOS
          Settings. This folder may include a &quot;Conflicts&quot; folder holding older copies
          kept when two devices edited the same item.
        </li>
      </ul>
      <p>
        Because we hold no copy of your data, there is nothing for us to export or delete on our
        side. You can still contact us with any question.
      </p>

      <h2>Children</h2>
      <p>StrongList doesn&apos;t collect personal data from anyone, children included.</p>

      <h2>If you email us</h2>
      <p>
        If you write to <a href={`mailto:${contactEmail}`}>{contactEmail}</a>, we receive your email
        address and message and use them only to reply to you. We keep that correspondence for as
        long as needed to help you, then delete it{' '}
        <Placeholder>[adjust to your actual practice]</Placeholder>.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on where you live (for example under the EU General Data Protection Regulation),
        you have rights such as access, correction, deletion and objection. Since we don&apos;t
        hold your training data, you exercise most of them directly in the app or in your iCloud
        Drive. For anything else, contact <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
        You can also complain to your data protection authority (in Spain, the Agencia Española de
        Protección de Datos, www.aepd.es).
      </p>

      <h2>Changes</h2>
      <p>
        If this policy changes, we&apos;ll update this page and its effective date. If StrongList
        ever starts collecting data, we&apos;ll say so here and in the App Store privacy details
        before that version ships.
      </p>
    </section>

    <section id="es" lang="es">
      <h1>Política de privacidad de StrongList</h1>
      <div className="meta">
        <p>
          <strong>Fecha de entrada en vigor:</strong> <Placeholder>[AAAA-MM-DD]</Placeholder>
        </p>
        <p>
          <strong>Responsable:</strong>{' '}
          <Placeholder>[Nombre del responsable, p. ej. Roberto Vázquez González]</Placeholder>,{' '}
          <Placeholder>[dirección postal, si decides publicarla]</Placeholder>
        </p>
        <p>
          <strong>Contacto:</strong> <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </p>
      </div>

      <h2>En pocas palabras</h2>
      <p>
        StrongList no recoge tus datos. No hay cuenta, ni analítica, ni publicidad, ni seguimiento,
        ni ningún servidor nuestro. Los entrenamientos que apuntas se quedan en tu dispositivo y,
        si tienes activada la sincronización con iCloud, en tu propio iCloud Drive. Nosotros, el
        desarrollador, no los recibimos ni los vemos nunca.
      </p>

      <h2>Qué guarda StrongList y dónde</h2>
      <p>
        Todo lo que metes en StrongList son datos de entrenamiento que escribes tú: gimnasios
        (nombre, si las máquinas están numeradas, números de máquina), ejercicios y ejercicios
        personalizados (nombre, grupo muscular, tipo), planes (nombre y objetivos como series,
        repeticiones, peso, duración y distancia) y sesiones (fecha, hora de inicio y fin,
        gimnasio y lo que has apuntado). StrongList no tiene un campo de notas libres y no te pide
        nombre, email, teléfono, fotos, contactos, ubicación ni datos de salud.
      </p>
      <p>
        <strong>En tu dispositivo.</strong> Estos datos se guardan en la base de datos local de la
        app en tu iPhone o iPad. Tus ajustes (idioma, kg/lb, valores por defecto, el último
        gimnasio usado y preferencias similares) se guardan en los ajustes locales de la app.
      </p>
      <p>
        <strong>En tu propio iCloud Drive (opcional).</strong> Si la sincronización con iCloud está
        activada, StrongList también guarda tus datos de entrenamiento como archivos JSON legibles
        en la carpeta de la app en tu iCloud Drive (Archivos › iCloud Drive › StrongList), para que
        tus dispositivos estén al día. Viene activada por defecto y puedes desactivarla cuando
        quieras en StrongList › Ajustes. Esos archivos están en tu cuenta de iCloud, bajo las
        condiciones y la{' '}
        <a
          href="https://www.apple.com/es/legal/privacy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          política de privacidad de Apple
        </a>. Nosotros no tenemos acceso a ellos.
      </p>
      <p>
        Para distinguir tus dispositivos al sincronizar, cada archivo registra cuándo se modificó,
        el tipo de dispositivo (&quot;iPhone&quot; o &quot;iPad&quot;) y un identificador aleatorio
        que StrongList crea en ese dispositivo. Ese identificador no es el identificador de
        publicidad ni ningún identificador de Apple, y solo se guarda en tus propios archivos. En
        el dispositivo, StrongList guarda además un pequeño archivo de estado de la sincronización
        con un resumen irreversible (SHA-256) del identificador de tu cuenta de iCloud, para
        detectar si cambias de cuenta. El identificador en sí no se guarda, y StrongList nunca lee
        el nombre ni el email de tu cuenta de Apple.
      </p>
      <p>
        <strong>Actividad en directo.</strong> Mientras hay un entreno en curso, StrongList puede
        mostrarlo en la pantalla bloqueada y en la Dynamic Island (nombre del plan, tiempo,
        progreso y siguiente ejercicio). Ese contenido se queda en el dispositivo y desaparece al
        terminar el entreno. Cualquiera que vea tu pantalla puede verlo. Puedes desactivar las
        actividades en directo en los Ajustes de iOS.
      </p>

      <h2>Importar una rutina con tu propia app de IA</h2>
      <p>
        Al crear un plan, StrongList puede copiar unas instrucciones (un prompt) ya preparadas al
        portapapeles. Si quieres, las pegas junto con una foto o el texto de tu rutina en la app de
        IA que elijas y luego pegas su respuesta en StrongList. StrongList no lleva IA integrada y
        no envía nada en este proceso. Las instrucciones no contienen datos personales. Lo que
        compartas con la otra app lo gestiona su proveedor según su propia política de privacidad.
      </p>

      <h2>Lo que no hacemos</h2>
      <ul>
        <li>No hay cuenta ni inicio de sesión.</li>
        <li>No hay SDK de analítica, informes de fallos, publicidad ni de terceros.</li>
        <li>
          No hay seguimiento entre apps o webs, y no vendemos ni cedemos datos a intermediarios de
          datos.
        </li>
        <li>
          No tenemos servidores propios: StrongList no nos envía tus datos ni a nosotros ni a
          nadie. La única copia fuera del dispositivo es la sincronización opcional con tu propio
          iCloud Drive.
        </li>
      </ul>

      <h2>Compras y servicios de Apple</h2>
      <p>
        StrongList se vende a través del App Store. El pago lo gestiona Apple y nosotros no
        recibimos tus datos de pago. Apple puede facilitar a los desarrolladores informes agregados
        de ventas y uso, e informes de fallos solo si has elegido compartirlos con los
        desarrolladores en los Ajustes de iOS. Todo ello se rige por la política de privacidad de
        Apple.
      </p>

      <h2>Conservación y borrado</h2>
      <p>Tus datos se conservan hasta que los borras:</p>
      <ul>
        <li>
          En la app puedes eliminar sesiones y archivar y después eliminar planes. Los ejercicios
          personalizados se eliminan desde Ajustes.
        </li>
        <li>
          Al eliminar StrongList de un dispositivo se borran sus datos locales en ese dispositivo.
        </li>
        <li>
          Si usaste la sincronización con iCloud, tus archivos siguen en tu iCloud Drive hasta que
          los borres: abre Archivos › iCloud Drive › StrongList o gestiona los datos de iCloud de
          la app en los Ajustes de iOS. La carpeta puede incluir una subcarpeta
          &quot;Conflicts&quot; con copias antiguas guardadas cuando dos dispositivos editaron lo
          mismo.
        </li>
      </ul>
      <p>
        Como no tenemos ninguna copia de tus datos, no hay nada que exportar ni borrar por nuestra
        parte. Aun así, puedes escribirnos con cualquier duda.
      </p>

      <h2>Menores</h2>
      <p>StrongList no recoge datos personales de nadie, tampoco de menores.</p>

      <h2>Si nos escribes</h2>
      <p>
        Si escribes a <a href={`mailto:${contactEmail}`}>{contactEmail}</a>, recibimos tu dirección
        y tu mensaje y los usamos solo para responderte. Conservamos esa correspondencia el tiempo
        necesario para ayudarte y después la borramos{' '}
        <Placeholder>[ajustar a la práctica real]</Placeholder>.
      </p>

      <h2>Tus derechos</h2>
      <p>
        Según dónde vivas (por ejemplo, con el Reglamento General de Protección de Datos de la UE),
        tienes derechos como el de acceso, rectificación, supresión u oposición. Como no tenemos
        tus datos de entrenamiento, la mayoría los ejerces directamente en la app o en tu iCloud
        Drive. Para cualquier otra cosa, escribe a{' '}
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. También puedes reclamar ante la
        Agencia Española de Protección de Datos (www.aepd.es).
      </p>

      <h2>Cambios</h2>
      <p>
        Si esta política cambia, actualizaremos esta página y su fecha. Si algún día StrongList
        empezara a recoger datos, lo diremos aquí y en los detalles de privacidad del App Store
        antes de publicar esa versión.
      </p>
    </section>
  </StrongListDocument>
)

export default PrivacyPage
