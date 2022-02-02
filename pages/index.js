import appConfig from "../config.json";
import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import react from "react";

//isso é um componente react e tudo que funcionar dentro dele so fica dentro do escopo...

function GlobalStyle() {
  return (
    <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      body {
        font-family: "Open Sans", sans-serif;
      }
      /* App fit Height */
      html,
      body,
      #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
      /* ./App fit Height */
    `}</style>
  );
}

function TituloInicio(Props) {
  console.log(Props.children);
  const tag = Props.tag || "h1";
  return (
    <>
      <tag>{Props.children}</tag>
      <style jsx>{`
        ${tag} {
          color: ${appConfig.theme.colors.primary["050"]};
          font-size: 25px;
          font-weight: 600;
          backgroundcolor: ${appConfig.theme.colors.primary["500"]};
        }
      `}</style>
    </>
  );
}

/* function HomePage() {
  return (
    <div>
      <GlobalStyle/>
      <TituloInicio tag="h2">Boas vindas de volta</TituloInicio>
      <h3>Bem vindo ao Chat do LoL</h3>
    </div>
  );
}
 */
export default function PaginaInicial() {
  /*   const username = "therealkaslow";
   */ const [username, setUsername] = react.useState("");
  return (
    <>
      <GlobalStyle />
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: appConfig.theme.colors.primary[50],
          backgroundImage:
            "url(https://images4.alphacoders.com/600/thumbbig-600528.webp)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            width: "50%",
            maxWidth: "600px",
            borderRadius: "5px",
            padding: "32px",
            margin: "16px",
            boxShadow: "0 5px 20px 0 rgb(0 0 0 / 60%)",
            backgroundColor: appConfig.theme.colors.primary["050"],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function (eventinfo){
              eventinfo.preventDefault();
              console.log('Alguém submeteu o form');
            }}
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "50%" },
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <h1>Boas vindas Invocador!</h1>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: "32px",
              }}
            >
              {appConfig.name}
            </Text>
            {/*             <input
              type="text"
              value={username}
              onChange={function (event) {
                console.log("usuario digitou", event.target.value);
                const valor = event.target.value;
                // trocar o valor da variavel
                setUsername(valor);
                //essa função só é executada quando o usuario digita
              }}
            /> */}
            <TextField
              value={username}
              onChange={function (event) {
                console.log("usuario digitou", event.target.value);
                const valor = event.target.value;
                // trocar o valor da variavel
                setUsername(valor);
                //essa função só é executada quando o usuario digita
              }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.primary[100],
                },
              }}
            />
            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[400],
              }}
            />
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <Box
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "200px",
              padding: "16px",
              backgroundColor: appConfig.theme.colors.primary[500],
              borderColor: appConfig.theme.colors.primary["050"],
              borderRadius: "10px",
              flex: 1,
              minHeight: "240px",
            }}
          >
            <Image
              styleSheet={{
                borderRadius: "25%",
                marginBottom: "16px",
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: "3px 10px",
                borderRadius: "1000px",
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}
