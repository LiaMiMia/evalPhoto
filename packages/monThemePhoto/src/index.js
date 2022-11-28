import Root from "./components"


export default {
  name: "monThemePhoto",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      restApiPrefix: "http://charles-cantin-photographe.local/wp-json/wp/v2",
      isMobileMenuOpen: false,
    }
  },
  actions: {
    theme: {
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      }
    }
  }
};
