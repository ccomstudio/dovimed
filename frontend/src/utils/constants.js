import React from "react";
import {FaBriefcase, FaEye, FaChild, FaInfoCircle, FaPhoneSquareAlt, FaVial} from "react-icons/fa";
import {MdHearing} from "react-icons/md";
import {HiHome} from "react-icons/hi";

export const products_url = "/api/v1/products";
export const packages_url = "/api/v1/packages";
export const single_product_url = `/api/v1/product/`;
export const single_package_url = `/api/v1/package/`;
export const inputs_url = "/api/v1/form";

export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
    links: [
      {label: "home page", icon: <HiHome />, url: "/"},
      {label: "about", icon: <FaInfoCircle />, url: "/about"},
      {label: "contact", icon: <FaPhoneSquareAlt />, url: "/contact"},
    ],
  },
  {
    id: 2,
    text: "packages",
    url: "/about",
    links: [
      {label: "about", icon: <FaBriefcase />, url: "/products"},
      {label: "customers", icon: <FaBriefcase />, url: "/products"},
    ],
  },
];

export const fields = [
  {
    id: 1,
    icon: <FaChild /> /* MdChildFriendly wózek  FaBaby noworodek*/,
    title: "pediatrics",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 2,
    icon: <MdHearing />,
    title: "laryngology",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 3,
    icon: <FaEye />,
    title: "ophthalmology",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 4,
    icon: <FaVial />,
    title: "blood tests",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
];

export const about = {
  intro:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quaerat, modi doloremque necessitatibus eum dolor nesciunt delectus, voluptate blanditiis, obcaecati beatae ab aut ipsa consequuntur tempora cumque. Ut quo enim vero odio minus nostrum eveniet, doloribus veritatis dolorem unde ipsum, voluptatibus totam. Explicabo, quas libero! Laborum incidunt minima consequatur ratione?",
  features: [
    {
      id: 1,
      list: [
        "La vino pro senviva kaj surterigxis vidis, lin la ili manieron kaj, timis fidela liajn vi krom tien, diris ni ol malgraux por laux kiuj, pafilegojn nin vi tion kion.",
        "Cxiujn malheligxis gxojis bonan unu sovagxuloj nigraj, fosilon surteron se iros amase por. Okazo mi piede bekforme mi riveretan niaj kion li. Kaj enhavos sxipo atingis kiamaniere ni ni.",
        "Espero sencon mi ni cxiuj boatflankon, boato bone se sporto kaj sed la peligxi, vi eble en iradis hejmon homoj albordigxi pafspaco ol kiuj, vidante ke la estus donis unufoje.",
      ],
      subject: "history",
    },
    {
      id: 2,
      list: [
        "Sur marbordo knabo vi kilometrojn la sekvanta. Min ne kial malrapide vidi tial ferdeko alsendis boato. Vidi do rabajxon kaj kapo. Grandegaj gajeco mi tiu cxu. Kun zuron boato mi deziregis mi kelke povu. Malrapide mauxroj havis malgranda metrojn mano, al por la nun surmaron. Kuragxis pecegon ne kaj da.",
        "Kelke por morti la fine la facile mi intencas la. Kiel tiam kiu fontaj al mauxro. Maltrankvila cxar vidi sentadis kaj. Teron kiam liberigxi rikoltojn sxnuregon, al en cxar la nutrajxon la cxirkaux kaj venis si, sciis tiam mi zuro.",
      ],
      subject: "present",
    },
    {
      id: 3,
      list: [
        "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.",
        "Vento vivkuron mi por ke li trovis birdon kiam tiel kies. Tien turkoj la pafiloj unu da estis viron. Fontaj ni sed vole ili mi, kaj cxiuspecajn rericevonta auxdi kaj novajxo mian, ni la ni kaj la promontoro turko ne. Sciigxis terbordo se kaj ke elsendis ke viron, lancon iom.",
        "Ke timis iri knabon cxu sekigxita ni haltis knabon, tuj kapo okupita mia la speco. Kaj ke la etendis sorto kiun eltrovus, per franca vidi.",
      ],
      subject: "customers",
    },
  ],
};

export const contactForm = [
  {
    id: 1,
    tag: "input",
    name: "name",
    type: "text",
    placeholder: "Name",
    errorMessage: "Name should be 3-20 characters and shouldn't include any special character",
    label: "Name",
    pattern: /^[A-Za-z- ]{5,20}$/,
    required: true,
  },
  {
    id: 2,
    tag: "input",
    name: "email",
    type: "email",
    placeholder: "email",
    errorMessage: "It should be a valid email address",
    label: "Email",
    pattern: /^[^@]+@[^@]+\.[^@]+$/, //jedna malpa i kropka
    required: true,
  },
  {
    id: 3,
    tag: "textarea",
    name: "message",
    type: "text",
    placeholder: "message",
    rows: "5",
    errorMessage: "Please type your message",
    label: "Email",
    pattern: /[A-Z a-z -]/, //jedna malpa i kropka
    required: true,
  },
];

export const packages = [
  {
    id: 1,
    name: "junior",
    age: "children",
    memo: "get the finest bits",
    image: "https://res.cloudinary.com/dkm9cvsyg/image/upload/v1648654532/lab/dzieci2_lmshkt.jpg",
    description:
      "Mi pro fordonus nia gxin ventego survoje tuj. Ke kaj sesjarrego sxipflanke tre nia de de iru terbordon. Ni iri iradi iam kaj. Al tie silente iros ni li mia renkonti teron, iradi por kukoj viron post pro dolcxe, malrapide la post boato speco gxin, hejme horoj ni bruo cxar.",
  },
  {
    id: 2,
    name: "too busy",
    age: "adults",
    memo: "let us arrange all for you",
    image: "https://res.cloudinary.com/dkm9cvsyg/image/upload/v1648654532/lab/dynamika_xe1hic.jpg",
    description:
      "Unu vidis botelegoj ke mia sanktuloj mi dauxris la mian tia. Zuro por siajn zuro eble aux, cxar ke pafiloj falis kilometrojn ni vidis. La sovagxulojn mordis monon la por falis, fine mi ne iri okazo mi, de kaj devis nun kuragxas, ili da al viando montris markolo terbordo kaj.",
  },
  {
    id: 3,
    name: "great care",
    age: "adults",
    memo: "we give as much as we can",
    image: "https://res.cloudinary.com/dkm9cvsyg/image/upload/v1649237404/lab/seniorr_jh73ih.jpg",
    description:
      "Intencis kie malsupren malgraux mi ruskoj ne tial por, cxu sxatis kion cxar malfelicxa li pro venis, aux tial ne sia vivo mi kuglon rapidis miaj krom. Cxar post iom trisemajne difektajxojn kiujn, la kun sed diris estas provizis lin je eknagxis, vino lin kvazaux iom lauxbone. Malfelicxa haltu mi.",
  },
  {
    id: 4,
    name: "time together",
    age: "adults",
    memo: "best tailored it can be",
    image: "https://res.cloudinary.com/dkm9cvsyg/image/upload/v1648654532/lab/rodzina_ar5u4k.jpg",
    description:
      "Kaj lin mi kvazaux kapti sxipon aux dek jam. Tro al prave povos mi deziron. Helpon cxiam antauxa ke fisxoj demetis prenis mi diris. Nek monujo ne pinto eltrovis gxojege nun, vidi povas sxipo nek mortpafis en, sxipeto viro ne kien en ni tiuj. Sciis mia certe parto tuj fordoni.",
  },
];

export const products = [
  {
    id: 1,
    name: "sight tests",
    age: "children",
    location: "warszawa, dobra 32",
    memo: "Vole longaspace estas kontrauxe kun kajuton",
    featured: false,
    package: [1],
    image: "https://res.cloudinary.com/dkm9cvsyg/image/upload/v1648909266/lab/wzrok_2_xu7006.jpg",
    description:
      "Pro elnutrita sxipon al lasis ventego li fonton lingvo ree apud. Kaj gxi faris livroj ke velo konfidis alportu niajn el, trovis tion gxi ankoraux la mi ia, boaton mi sxancon liberulo estos cxar malbonon. Mordis maron mi cxirkaux li kaj plimulto. Gxi teron do vidi mi kaj je kapon.",
  },
  {
    id: 3,
    name: "sight tests",
    age: "adults",
    location: "warszawa, dobra 32",
    memo: "Nin gxin en kvankam kiam direktilon por",
    featured: true,
    package: [2],
    image: "https://res.cloudinary.com/dkm9cvsyg/image/upload/v1648909267/lab/wzrok_f5lq6l.jpg",
    description:
      "Da vi vojon boaton ne la, pecon kun veturas pensis de vi ke ke subakvigxis ni. Aux mejlon post povas ili. De tre turko mi ne, diris kiun kun la mi, vi gxi al ordigu loko, tial mejlon kiujn al devas dolcxe mallevis morgauxtage sed, tiu-cxi en nu libera okupita.",
  },
  {
    id: 4,
    name: "laryngology",
    age: "children",
    location: "warszawa, dobra 32",
    memo: "Vin ni la malsupren malbonan la mieno",
    featured: true,
    package: [1],
    image: "https://res.cloudinary.com/dkm9cvsyg/image/upload/v1648909265/lab/laryng_l2jotn.jpg",
    description:
      "Rapidigxu kaj li plej da diris. La sxanco sencon sursxipe elsendis gxis la malamikoj metis gastoj. Kunpreni donis fojon sxtofoj intencis ia, la la kvazaux tiam por tial mian la boato iros. En kusxante lasis loko bone sursxipe mi onklino, estis nin pecon ian cxar rabajxon kiam malgraux cxar. Levis.",
  },
  {
    id: 5,
    name: "laryngology",
    age: "adults",
    location: "warszawa, dobra 32",
    memo: "Vanigxis se por blovi deziregis li kiam",
    featured: false,
    package: [4],
    image: "https://res.cloudinary.com/dkm9cvsyg/image/upload/v1648909306/lab/laryngo_dmv1r8.jpg",
    description:
      "Mauxron cxio ankaux al alteren gajeco sxipo al, povis ekiris pripensi mi por ne sxnuregon rapidis, alteren fine cxar kiom kies la al. Ke benos gxi vidi alportu liajn ke de. Mi fari lasi morti da. Sed prizorgi kiam malrespekte la la hokfadenojn vorton, birdoj montris vi kaj ne la.",
  },
  {
    id: 6,
    name: "blood tests",
    location: "warszawa, sienna 18",
    memo: "Deziregis cxiuj turko knabon tial sed tiun",
    featured: true,
    package: [1, 2, 3, 4],
    image: "https://res.cloudinary.com/dkm9cvsyg/image/upload/v1648924025/lab/fiolki2_2_j2zjv4.jpg",
    description:
      "Ke al subakvigxis vento sencon estus ni, ni mian la atingi ili venis fonton nin cxirkaux manieron, sxipon diris kauxzis kaj por nun mi. Lauxbone mi pro kiamaniere la. Honto tiu por la min mia, auxdis la ke kaj kiam, li ke longe tre sudo kiun la viroj sinjoro decidi,.",
  },
  {
    id: 7,
    name: "prenatal tests",
    location: "warszawa, sienna 18",
    memo: "Gxis estas havu kaj la de grandan tial",
    featured: true,
    package: [2, 3],
    image: "https://res.cloudinary.com/dkm9cvsyg/image/upload/v1648923327/lab/prenatal_l7ceuc.jpg",
    description:
      "Montri trovigxas kaj farigxos tamen mian cxiuj estas, la mi la ni li niaj. La espero kompreni kaj por povis. Estus ree ni mi mi maro aux laux kontante, al li loko volas ke. Tuj ili ili el kaj surteron cxiusemajne de, terbordo jxuros ni al tero sciis, tiu-cxi gxin.",
  },
  {
    id: 8,
    name: "microbiology",
    location: "warszawa, sienna 18",
    memo: "Dole longaspace estas kontrauxe kun kajuton",
    featured: true,
    package: [1, 2, 3, 4],
    image: "https://res.cloudinary.com/dkm9cvsyg/image/upload/v1648909265/lab/mikrobiol_znfb5e.jpg",
    description:
      "Li mi eble el mi mordis. Niajn mi la objektojn mi deziro, farmilaro por tiu-cxi skoto ke manojn min kaj. Mortigas vidi kaj hejmon estis povas por el kiam, li mondo mi ni tian ke estas por. Alvenis por mi diris antauxgusto tial. Ni kiel se surmare iris deziro, kaj.",
  },
  {
    id: 9,
    name: "hearing tests",
    age: "children",
    location: "warszawa, dobra 32",
    memo: "Vanigxis se por blovi deziregis li kiam",
    featured: true,
    package: [1],
    image: "https://res.cloudinary.com/dkm9cvsyg/image/upload/v1648909266/lab/sluch_ohpe2d.png",
    description:
      "Suer sxipon mi sporto la turko alvenis franca mi la, ke tial por malbonan tagon la diris kiel. Ekkaptis sur vendi haltu iri min mi estis, ceterajn ne kukoj por sed min ili ili tial, malfelicxa nin la al por el vigle. Tial bruo kaj viro li. Kiam ia por",
  },
  {
    id: 10,
    name: "hearing tests",
    age: "adults",
    location: "warszawa, dobra 32",
    memo: "Gxis estas havu kaj la de grandan tial",
    featured: false,
    package: [2, 3, 4],
    image: "https://res.cloudinary.com/dkm9cvsyg/image/upload/v1648909266/lab/sluch_2_ptbkom.jpg",
    description:
      "Por sentis povis konante kaj mi knabo ili, signojn mi favoron grava la por estas. La kaj povos bonamiko boaton li estas regxo eljxetis. Tiuokaze okupita por la ambaux tute miajn tion cxion. Parto per ni nu bone gxin. Viron knabon kaj por cxar kun velveturis. La nian mia okazo.",
  },
  {
    id: 2,
    name: "in vitro",
    location: "warszawa, sienna 18",
    memo: "Fresxan alteren en estis koro kaj lin",
    featured: true,
    package: [2, 3],
    image: "https://res.cloudinary.com/dkm9cvsyg/image/upload/v1648924008/lab/invitro_plifda.jpg",
    description:
      "Rapidigxu kaj li plej da diris. La sxanco sencon sursxipe elsendis gxis la malamikoj metis gastoj. Kunpreni donis fojon sxtofoj intencis ia, la la kvazaux tiam por tial mian la boato iros. En kusxante lasis loko bone sursxipe mi onklino, estis nin pecon ian cxar rabajxon kiam malgraux cxar. Levis.",
  },
];

export const singleProduct = {
  personel: "costas paliagis",
  available: ["monday", "wednesday"],
  features: [
    {
      id: 1,
      list: [
        "La vino pro senviva kaj surterigxis vidis, lin la ili manieron kaj, timis fidela liajn vi krom tien, diris ni ol malgraux por laux kiuj, pafilegojn nin vi tion kion.",
        "Cxiujn malheligxis gxojis bonan unu sovagxuloj nigraj, fosilon surteron se iros amase por. Okazo mi piede bekforme mi riveretan niaj kion li. Kaj enhavos sxipo atingis kiamaniere ni ni.",
        "Espero sencon mi ni cxiuj boatflankon, boato bone se sporto kaj sed la peligxi, vi eble en iradis hejmon homoj albordigxi pafspaco ol kiuj, vidante ke la estus donis unufoje.",
      ],
      subject: "recommendation",
    },
    {
      id: 2,
      list: [
        "Sur marbordo knabo vi kilometrojn la sekvanta. Min ne kial malrapide vidi tial ferdeko alsendis boato. Vidi do rabajxon kaj kapo. Grandegaj gajeco mi tiu cxu. Kun zuron boato mi deziregis mi kelke povu. Malrapide mauxroj havis malgranda metrojn mano, al por la nun surmaron. Kuragxis pecegon ne kaj da.",
        "Kelke por morti la fine la facile mi intencas la. Kiel tiam kiu fontaj al mauxro. Maltrankvila cxar vidi sentadis kaj. Teron kiam liberigxi rikoltojn sxnuregon, al en cxar la nutrajxon la cxirkaux kaj venis si, sciis tiam mi zuro.",
      ],
      subject: "description",
    },
    {
      id: 3,
      list: [
        "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.",
        "Vento vivkuron mi por ke li trovis birdon kiam tiel kies. Tien turkoj la pafiloj unu da estis viron. Fontaj ni sed vole ili mi, kaj cxiuspecajn rericevonta auxdi kaj novajxo mian, ni la ni kaj la promontoro turko ne. Sciigxis terbordo se kaj ke elsendis ke viron, lancon iom.",
      ],
      subject: "duration",
    },
  ],
};

export const singlePackage = {personel: "costas paliagis", available: ["monday", "wednesday"]};

export const form = [
  {
    step: "Personal details",
    fields: [
      {
        id: 1,
        name: "firstName",
        type: "text",
        placeholder: "first name",
        errorMessage: "Name should be 3-16 characters and shouldn't include any special character!",
        label: "First Name",
        pattern: /^[A-Za-z]{3,16}$/,
        required: true,
      },
      {
        id: 2,
        name: "lastName",
        type: "text",
        placeholder: "last name",
        errorMessage: "Name should be 3-16 characters and shouldn't include any special character!",
        label: "Last Name",
        pattern: /^[A-Za-z- ]{3,20}$/,
        required: true,
      },
    ],
  },
  {
    step: "Contact Information",
    fields: [
      {
        id: 3,
        name: "email",
        type: "email",
        placeholder: "email",
        errorMessage: "It should be a valid email address!",
        label: "Email",
        pattern: /^[^@]+@[^@]+\.[^@]+$/, //jedna malpa i kropka
        required: true,
      },
      {
        id: 4,
        name: "phone",
        type: "tel",
        placeholder: "e.g. 666777888",
        label: "Phone",
        errorMessage: "Please provide 9-digit phone number.",
        pattern: /[0-9]{9}/,
        maxLength: 9,
        required: true,
      },
    ],
  },
  {
    step: "Appointment Details",
    fields: [
      {
        id: 5,
        name: "list",
        label: "Field of interest",
        errorMessage: "Please select an option.",
        pattern: /[A-Za-z0-9]/,
        required: true,
        list: ["Go nuts", "Best to do"],
      },
      {
        id: 6,
        name: "date",
        type: "date",
        label: "Date of visit",
        errorMessage: "Please provide the date.",
        pattern: "[0-9]",
        required: true,
      },
    ],
  },

  // {step: "Other", fields:  [{
  //   id: 5,
  //   name: "password",
  //   type: "text",
  //   placeholder: "Password",
  //   errorMessage: "Password should be at least 6 characters long and include at least 1 letter and 1 number!", //      "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
  //   label: "Password",
  //   pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{6,}$`,  //`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
  //   required: true,
  // },
  // {
  //   id: 6,
  //   name: "confirmPassword",
  //   type: 'text',
  //   placeholder: "Confirm Password",
  //   errorMessage: "Passwords don't match!",
  //   label: "Confirm Password",
  //   pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,//formData.password,
  //   required: true,
  // },]
  // },
];
