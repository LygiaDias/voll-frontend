import { shallowMount } from "@vue/test-utils";
import LoginPage from "@/components/LoginPage.vue";
import AdminPage from "@/components/AdminPage.vue";
import ProductsPage from "@/components/ProductsPage.vue";
import NavComponent from "@/components/NavComponent.vue";

describe("LoginPage.vue Test", () => {
  it("Verifica se o componente de Login é renderizado corretamente ", () => {
    const wrapper = shallowMount(LoginPage, {
      propsData: {
        title: "LoginPage",
      },
    });

    expect(wrapper.vm.$options.name).toMatch("LoginPage");

    expect(wrapper.text()).toMatch("Login Email  Senha Entrar");
  });
});

describe("AdminPage.vue Test", () => {
  it("Verifica se o componente de Painel de Controle é renderizado corretamente ", () => {
    const wrapper = shallowMount(AdminPage, {
      propsData: {
        title: "Admin",
      },
    });

    expect(wrapper.vm.$options.name).toMatch("Admin");

    expect(wrapper.text()).toMatch(
      "Criar Produto Nome do Produto:  Descrição:  Preço:  Moedas: Salvar"
    );
  });
});

describe("ProductsPage.vue Test", () => {
  it("Verifica se o componente de Produtos é renderizado corretamente ", () => {
    const wrapper = shallowMount(ProductsPage, {
      propsData: {
        title: "ProductsPage",
      },
    });

    expect(wrapper.vm.$options.name).toMatch("ProductsPage");

    expect(wrapper.text()).toMatch("NomeDescriçãoPreçoMoedas");
  });
});

describe("NavComponent.vue Test", () => {
  it("Verifica se o componente Nav é renderizado corretamente ", () => {
    const wrapper = shallowMount(NavComponent, {
      propsData: {
        title: "NavComponent",
      },
    });

    expect(wrapper.vm.$options.name).toMatch("NavComponent");

    expect(wrapper.text()).toMatch("Login  Produtos  Painel de Controle");
  });
});
