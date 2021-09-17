import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  fa: {
    addToCart: "افزودن به سبد خرید",
    product: "کالا",
    showCarts: "مشاهده سبد خرید",
    tomans: "تومان",
    next: "بعدی",
    pre: "قبلی",
    cart: "سبد خرید",
    cartIsEmtpy: "سبد خرید شما خالی است!",
    backHome: "بازگشت به خانه",
  },
};

const i18n = new VueI18n({
  locale: "fa", // set locale
  messages, // set locale messages
});
export default i18n;
