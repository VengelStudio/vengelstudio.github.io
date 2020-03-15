import React from "react";
import "./KtoTerazPrivacyPolicy.scss";
import Text from "../Shared/Text/Text";

class KtoTerazPrivacyPolicy extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Text weight={5}>
          Polityka prywatności aplikacji<br></br>"Kto teraz? 🎉 - Gra imprezowa
          🇵🇱"
        </Text>
        <Text size={6}>
          Nasza aplikacja nie zbiera żadnych danych użytkownika.
        </Text>
      </div>
    );
  }
}

export default KtoTerazPrivacyPolicy;
