import * as React from "react";
import { Html, Head, Preview, Body, Container, Text, Section, Hr, Tailwind} from "@react-email/components";

export default function Email({ name, message }) {
  return (
    <Html>
      <Head />
      <Preview>Hemos recibido su mensaje - lEoDomoTics</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="bg-white rounded-lg p-8 my-8 mx-auto max-w-xl shadow-md">
            <Section className="text-center mb-6">
              <Text className="text-2xl font-bold text-blue-600 m-0">
                lEoDomoTics
              </Text>
            </Section>

            <Text className="text-base text-gray-800 mb-4">
              Estimado <strong>{name}</strong>,
            </Text>

            <Text className="text-base text-gray-800 mb-2">
              Hemos recibido su mensaje, el cual dicta lo siguiente:
            </Text>

            <Section className="bg-gray-50 border-l-4 border-blue-500 p-4 italic text-gray-700 mb-4">
              “{message}”
            </Section>

            <Text className="text-base text-gray-800 mb-6">
              Muy pronto uno de nuestros supervisores estará en contacto con
              usted.
            </Text>

            <Hr className="border-gray-200 my-6" />

            <Text className="text-xs text-gray-500 text-center">
              © {new Date().getFullYear()} lEoDomoTics. Todos los derechos
              reservados.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
