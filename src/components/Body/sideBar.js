import User from "./user";
import Suggestions from "./sugetionss";

export default function Sidebar() {
  return (
    <div class="sidebar">
      <User nick="catanacomics" name="Catana" />

      <Suggestions />

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}