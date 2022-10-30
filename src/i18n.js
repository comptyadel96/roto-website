import i18n from "i18next"
import { initReactI18next } from "react-i18next"

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  ar: {
    translation: {
      "acceuil": "استقبال",
      "produits":"منتوجاتنا",
      "Apropos":"معلومات",
      "contactez-nous":"الاتصال بنا",
      "headerSub":"أفضل خدمة بيع خزانات مياه الشرب ثلاثية الطبقات في الجزائر",
      "headerTitle":"خزانات عالية الجودة",
      "découvrer":"اكتشف",
      "commander":"اطلب",
      "adaraCquoi":"Adara roto ما هي",
       "adaraC":"Adara roto هي شركة متخصصة في بيع الخزانات المواد الغذائية البلاستيكية ، وخاصة البولي إيثيلين ، بدأت رسميًا في عام 2014 بفضل الجودة الاستثنائية لمنتجاتها sarl adara roto أصبحت الشركة الرائدة في مجال إنتاج وبيع الخزانات في الجزائر",
       "cCostaudSub":"تتميز خزانتنا بجودتها ومتانتها أيضًا",
       "qualitéPrix":"الجودة والسعر",
        "qualitéPrixSub":"لا داعي لتدمير ميزانيتك للحصول على خزان مياه متطور",
        "satisfaction":"الرضا",
        "subSatisfaction":"الكمية جيدة ، لكن الجودة أفضل",
        "bienPlus":"وأكثر من ذلك بكثير",
        "TypesCiternes":"أنواع الخزانات",
        "hpf":"سعة صغيرة ، أفقي",
        "vgf":"سعة كبيرة ، عمودي",
        "vpf":"سعة صغيرة عمودية",
         "3couches":"3 طبقات",
         "c1":"الطبقة الأولى رمادية اللون مع السعة التخزينية وشعار الشركة",
         "c2":"الطبقة الثانية سوداء اللون تمنع الأشعة فوق البنفسجية من اختراق الخزان",
         "c3":"الطبقة الثالثة بيضاء ، فهي تسمح بالحفاظ على نقاء السائل والتحقق من حالة الماء",
         "important":"هام جدا",
         "importantText":"تحتوي جميع خزاناتنا على 3 طبقات فقط ، ولا ينتج Adara roto رقمًا أعلى أو أقل من هذا الرقم",
   
    },
  },
  fr: {
    translation: {
      "acceuil": "Acceuil",
      "produits":"Produits",
      "Apropos":"À propos",
      "contactez-nous":"Contactez-nous",
      "headerSub":"Le meilleur service de vente des citernes à eau potable tri-couches en Algérie",
      "headerTitle":"Citernes qualité premium",
      "découvrer":"Découvrer",
      "commander":"Commander",
      "adaraCquoi":"Adara roto c'est quoi ?",
      "adaraC":"Adara roto est une entreprise spécialisée dans la vente de citernes alimentaires en plastique , spécialement 'Polyethylene', elle a fait ses débuts officielement en 2014 grâce à la qualité exceptionnelle de ses produits sarl adara roto est devenu le leader dans le domaine de la production et de la vente des citernes en algérie",
      "C'estCostaud":"c'est costaud !",
       "cCostaudSub":"Nos citérnes se démarquent par leur qualité mais aussi pour leur robustesse",
       "qualitéPrix":"Qualité/prix",
       "qualitéPrixSub":"Plus besoin de vous ruiner pour avoir une citerne haute gamme",
       "satisfaction":"Satisfaction",
       "subSatisfaction":"La quantité c'est bien, la qualitée c'est encore mieux",
        "bienPlus":"Et bien plus encore",
        "TypesCiternes":"Types de citérnes",
        "hpf":"Horizontale petit format",
        "vgf":"Vertical grand format",
        "vpf":"Vertical petit format",
        "3couches":"3 couches",
        "c1":"la premiére couche est de couleur grise avec la capacité de stockage et le logo de l'entreprise",
        "c2":"la 2iéme couche est de couleur noir, elle empêche les rayons ultraviolets de pénétrer la citerne",
        "c3":"la 3iéme couche est de couleur blanche, elle permet de garder la pureté du liquide et de vérifier l'état de votre eau",
        "important":"Important",
        "importantText":"Toutes nos citernes ont seulement un nombre de 3 couches, adara roto ne produit pas un nombre supérieur ou inferieur à ce nombre",


    },
  },
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "fr", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
