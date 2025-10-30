import * as React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Text,
  Section,
  Hr,
  Tailwind,
} from "@react-email/components";
import { Home } from "lucide-react";

export default function Email({ name, message }) {
  return (
    <Html>
      <Head />
      <Preview>Hemos recibido su mensaje - lEoDomoTics</Preview>
      <Tailwind>
        <Body className="bg-gradient-to-b from-blue-600 to-indigo-700 font-sans py-12">
          <Container className="bg-white rounded-lg p-8 mx-auto max-w-xl shadow-lg">
            {/* Logo */}
            <Section className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-3xl mx-auto flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <Text className="text-2xl font-bold text-gray-900 m-0">
                lEoDomoTics
              </Text>
            </Section>

            {/* Saludo */}
            <Text className="text-base text-gray-800 mb-4">
              Estimado <strong>{name}</strong>,
            </Text>

            {/* Mensaje recibido */}
            <Text className="text-base text-gray-800 mb-2">
              Hemos recibido su mensaje, el cual dicta lo siguiente:
            </Text>

            <Section className="bg-gray-50 border-l-4 border-blue-500 p-4 italic text-gray-700 mb-4">
              “{message}”
            </Section>

            {/* Nota final */}
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
