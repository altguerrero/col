import React from "react";
import Menu from "../components/NavMenu";
import Aside from "../components/Aside";
import Footer from "../components/Footer";

// markup
const IndexPage = () => {
  return (
    <>
      <Menu />
      <main className="overflow-hidden min-h-screen pt-20">
        <h1 className="text-4xl text-center py-12 font-bold text-secondary px-4">
          POLÍTICA DE PRIVACIDAD DE COLRAÍCES
        </h1>
        <section className="container mx-auto">
          <div className="sm:w-3/4 mx-auto px-4">
            <h2 className="mb-4 text-secondary font-bold text-2xl">
              1. Presentación
            </h2>
            <p className="leading-relaxed text-gray-800 text-base sm:text-lg">
              ¡Gracias por confiar en Colraices! En Colraices Ltda. queremos
              ofrecerle la mejor experiencia en el proceso de financiación y
              compra de vivienda en Colombia desde el exterior. Reconocemos que
              llevar a cabo este proceso requiere de tiempo. Por esta razón y
              con el objeto de ofrecer un servicio excepcional requerimos
              mantener una comunicación directa con nuestros clientes a través
              de sus datos personales. Para Colraíces Ltda. su privacidad y la
              seguridad de sus datos personales es importante. En esta Política
              de Privacidad queremos explicarle de forma transparente cómo y por
              qué recopilamos, almacenamos, compartimos y utilizamos sus datos
              personales.
            </p>
          </div>
        </section>
        <section className="container mx-auto mt-12">
          <div className="sm:w-3/4 mx-auto px-4">
            <h2 className="mb-4 text-secondary font-bold text-2xl">
              2. Acerca de esta Política
            </h2>
            <p className="leading-relaxed text-gray-800 text-base sm:text-lg">
              Esta Política de Privacidad establece los detalles esenciales
              relativos a su relación de datos personales con Colraíces Ltda. La
              Política de Privacidad se aplica a todos los servicios que ofrece
              Colraíces Ltda. y a su red de franquicias. Esporádicamente
              podremos desarrollar nuevos servicios; si la presentación de estos
              servicios genera algún cambio en la forma en que recopilamos o
              procesamos sus datos personales, le proporcionaremos más
              información acerca del cambio de las Políticas.
            </p>
          </div>
        </section>
        <section className="container mx-auto mt-12">
          <div className="sm:w-3/4 mx-auto px-4">
            <h2 className="mb-4 text-secondary font-bold text-2xl">
              3. Sus derechos
            </h2>
            <p className="leading-relaxed text-gray-800 text-base sm:text-lg">
              Debido a la nueva ley de la Unión Europea, que se denomina
              Reglamento General de Protección de Datos, o “GDPR”, ofrece
              ciertos derechos a las personas sobre sus datos personales:
              Derecho de acceso: el derecho de ser informado y solicitar acceso
              a los datos personales que procesamos sobre usted. Derecho de
              rectificación: el derecho de solicitar que corrijamos o
              actualicemos sus datos personales cuando sean inexactos o estén
              incompletos. Derecho a eliminación: el derecho de solicitar que se
              eliminen sus datos personales. Derecho a restringir: el derecho de
              solicitar que se detenga el procesamiento de forma temporal o
              permanente de todos o algunos de sus datos personales. Derecho a
              objetar:
            </p>
            <p className="leading-relaxed text-gray-800 text-base sm:text-lg mt-4">
              el derecho, en cualquier momento, de objetar el procesamiento de
              sus datos personales por motivos relacionados con su situación
              particular. el derecho a oponerse a que su datos personales se
              procesen para fines de marketing directo. Derecho a la
              portabilidad de datos: el derecho de solicitar una copia de sus
              datos personales en formato electrónico. Si le enviamos mensajes
              de marketing electrónico basados en su consentimiento, o según lo
              permita la ley correspondiente de otro modo, usted puede “darse de
              baja” en cualquier momento. Los mensajes informativos y de
              marketing electrónico que recibe de Colraíces Ltda. incluyen
              también en el mismo mensaje un mecanismo para dejar de recibir
              comunicaciones (p. ej., un enlace para cancelar la suscripción en
              los correos electrónicos que le enviamos).
            </p>
            <p className="leading-relaxed text-gray-800 text-base sm:text-lg mt-4">
              Si tiene alguna pregunta acerca de su privacidad, sus derechos, o
              cómo ejercerlos, póngase en contacto con el área responsable de la
              protección de datos mediante el formulario “Contáctenos”.
              Responderemos su solicitud dentro de un período razonable una vez
              verificada su identidad.
            </p>
            <p className="leading-relaxed text-gray-800 text-base sm:text-lg mt-4">
              Si no está satisfecho con la forma en que usamos sus datos
              personales, puede comunicarse y es libre de presentar una queja
              con la autoridad de protección de datos local.
            </p>
          </div>
        </section>
      </main>
      <Aside />
      <Footer />
    </>
  );
};

export default IndexPage;
