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
       "adaraC":" هي شركة متخصصة في بيع خزانات المياه  البلاستيكية ، وخاصة البولي إيثيلين ، بدأت رسميًا في عام 2014 بفضل الجودة الاستثنائية لمنتجاتها  أصبحت الشركة الرائدة في مجال إنتاج وبيع الخزانات في الجزائر",
       "C'estCostaud":" !القوة",
       "cCostaudSub":"تتميز خزانتنا بجودتها ومتانتها أيضًا",
       "qualitéPrix":"الجودة والسعر",
        "qualitéPrixSub":"لا داعي لتدمير ميزانيتك للحصول على خزان مياه متطور",
        "satisfaction":"الرضا",
        "subSatisfaction":"الكمية جيدة ، لكن الجودة أفضل",
        "bienPlus":"وأكثر من ذلك بكثير",
        "TypesCiternes":"أنواع الخزانات",
        "hpf":"سعة صغيرة ، أفقي",
        "hpfSub":"مثالي للاستخدام في منزلك من 700 إلى 3000 لتر",
        "vgf":"سعة كبيرة ، عمودي",
        "vgfSub":"مصمم خصيصًا للاستخدام المتكرر وبكميات كبيرة من 5000 إلى 30000 لتر",
        "vpf":"سعة صغيرة عمودية",
        "vpfSub":"خزان متعدد الاستخدامات بسعة تخزين مختلفة ، من 500 إلى 2000 لتر",
         "3couches":"3 طبقات",
         "c1":"الطبقة الأولى رمادية اللون مع السعة التخزينية وشعار الشركة",
         "c2":"الطبقة الثانية سوداء اللون تمنع الأشعة فوق البنفسجية من اختراق الخزان",
         "c3":"الطبقة الثالثة بيضاء ، فهي تسمح بالحفاظ على نقاء السائل والتحقق من حالة الماء",
         "important":" هام جدا",
         "importantText":"تحتوي جميع خزانات المياه لدينا على عدد من 3 طبقات فقط ، ولا ننتج عددًا أعلى أو أقل من هذا الرقم",
         "Temoignage":"شهادات بعض الزبائن",
         "contactUs":"اتصل بنا",
         "contactUsSub":"لأي طلب أو استشارة ، املأ النموذج أدناه",
         "horairesOuverture":"ساعات العمل",
         "horairesOuvertureSub":"من الأحد إلى الخميس من الساعة 8:00 صباحًا حتى 4:30 مساءً",
         "adresse":"حي بن صالح واد العلايق البليدة الجزائر 55",
         "nomComplet":"الاسم الكامل*",
         "email":"البريد الإلكتروني*",
         "téléphone":"رقم الهاتف",
         "sujet":"موضوع *",
         "message":"رسالة*",
         "envoyer":"إرسال",


    },
  },
  fr: {
    translation: {
      "acceuil": "Acceuil",
      "produits":"Produits",
      "Apropos":"À propos",
      "contactez-nous":"Contactez-nous",
      "headerSub":"Le meilleur service de vente des citèrnes à eau potable tri-couches en Algérie",
      "headerTitle":"Citèrnes qualité premium",
      "découvrer":"Découvrer",
      "commander":"Commander",
      "adaraCquoi":"Adara roto c'est quoi ?",
      "adaraC":"Adara roto est une entreprise spécialisée dans la vente de citèrnes alimentaires en plastique , spécialement 'Polyethylene', elle a fait ses débuts officielement en 2014 grâce à la qualité exceptionnelle de ses produits sarl adara roto est devenu le leader dans le domaine de la production et de la vente des citernes en algérie",
      "C'estCostaud":"c'est costaud !",
       "cCostaudSub":"Nos citérnes se démarquent par leur qualité mais aussi pour leur robustesse",
       "qualitéPrix":"Qualité/prix",
       "qualitéPrixSub":"Plus besoin de vous ruiner pour avoir une citèrne haute gamme",
       "satisfaction":"Satisfaction",
       "subSatisfaction":"La quantité c'est bien, la qualitée c'est encore mieux",
        "bienPlus":"Et bien plus encore",
        "TypesCiternes":"Types de citérnes",
        "hpf":"Horizontale petit format",
        "hpfSub":"idéal pour une utilisation dans votre domicile, capacité de 700 à 3000 litres",
        "vgf":"Vertical grand format",
        "vgfSub":"Spécialement conçu pour une utilisation fréquente et a grande quantité capacité de 5000 à 30.000 litres",
        "vpf":"Vertical petit format",
        "vpfSub":"Citèrne polyvalente avec différente capacité de stockage, de 500 à 2000 litres",
        "3couches":"3 couches",
        "c1":"la premiére couche est de couleur grise avec la capacité de stockage et le logo de l'entreprise",
        "c2":"la 2iéme couche est de couleur noir, elle empêche les rayons ultraviolets de pénétrer la citerne",
        "c3":"la 3iéme couche est de couleur blanche, elle permet de garder la pureté du liquide et de vérifier l'état de votre eau",
        "important":"Important:",
        "importantText":"Toutes nos citèrnes ont seulement un nombre de 3 couches, adara roto ne produit pas un nombre supérieur ou inferieur à ce nombre",
         "Temoignage":"Temoignages de nos clients",
         "contactUs":"Contactez-nous",
         "contactUsSub":"Pour toute demande ou consultation, remplissez le formulaire ci-dessous",
         "horairesOuverture":"Horaires d'ouverture",
         "horairesOuvertureSub":"Du dimanche au jeudi de 8:00 heure à 16:30",
         "adresse":"55, Quartier Ben Salah, Oued El Alleug, (w) de Blida",
         "nomComplet":"Nom complet*",
         "email":"e-mail*",
         "téléphone":"Numéro de téléphone",
         "sujet":"Sujet*",
         "message":"Message*",
         "envoyer":"envoyer",



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
