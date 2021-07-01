import { Recipe } from "./types";

export const recipes: Recipe[] = [
  {
    id: 1,
    name: "Limonade de Coco",
    servings: 1,
    ingredients: [
      {
        name: "Lait de coco",
        quantity: 400,
        unit: "ml",
      },
      {
        name: "Jus de citron",
        quantity: 2,
      },
      {
        name: "Crème de coco",
        quantity: 2,
        unit: "cuillères à soupe",
      },
      {
        name: "Sucre",
        quantity: 30,
        unit: "grammes",
      },
      {
        name: "Glaçons",
      },
    ],
    time: 10,
    description:
      "Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistence désirée",
    appliance: "Blender",
    ustensils: ["cuillère à Soupe", "verres", "presse citron"],
  },
  {
    id: 2,
    name: "Poisson Cru à la tahitienne",
    servings: 2,
    ingredients: [
      {
        name: "Thon Rouge (ou blanc)",
        quantity: 200,
        unit: "grammes",
      },
      {
        name: "Concombre",
        quantity: 1,
      },
      {
        name: "Tomate",
        quantity: 2,
      },
      {
        name: "Carotte",
        quantity: 1,
      },
      {
        name: "Citron Vert",
        quantity: 5,
      },
      {
        name: "Lait de Coco",
        quantity: 100,
        unit: "ml",
      },
    ],
    time: 60,
    description:
      "Découper le thon en dés, mettre dans un plat et recouvrir de jus de citron vert (mieux vaut prendre un plat large et peu profond). Laisser reposer au réfrigérateur au moins 2 heures. (Si possible faites-le le soir pour le lendemain. Après avoir laissé mariner le poisson, coupez le concombre en fines rondelles sans la peau et les tomates en prenant soin de retirer les pépins. Rayer la carotte. Ajouter les légumes au poissons avec le citron cette fois ci dans un Saladier. Ajouter le lait de coco. Pour ajouter un peu plus de saveur vous pouver ajouter 1 à 2 cuillères à soupe de Crème de coco",
    appliance: "Saladier",
    ustensils: ["presse citron"],
  },
  {
    id: 3,
    name: "Poulet coco réunionnais",
    servings: 4,
    ingredients: [
      {
        name: "Poulet",
        quantity: 1,
      },
      {
        name: "Lait de coco",
        quantity: 400,
        unit: "ml",
      },
      {
        name: "Coulis de tomate",
        quantity: 25,
        unit: "cl",
      },
      {
        name: "Oignon",
        quantity: 1,
      },
      {
        name: "Poivron rouge",
        quantity: 1,
      },
      {
        name: "Huile d'olive",
      },
    ],
    time: 80,
    description:
      "Découper le poulet en morceaux, les faire dorer dans une cocotte avec de l'huile d'olive. Salez et poivrez. Une fois doré, laisser cuire en ajoutant de l'eau. Au bout de 30 minutes, ajouter le coulis de tomate, le lait de coco ainsi que le poivron et l'oignon découpés en morceaux. Laisser cuisiner 30 minutes de plus. Servir avec du riz",
    appliance: "Cocotte",
    ustensils: ["couteau"],
  },
  {
    id: 4,
    name: "Salade de riz",
    servings: 4,
    ingredients: [
      {
        name: "Riz blanc",
        quantity: 500,
        unit: "grammes",
      },
      {
        name: "Thon en miettes",
        quantity: 200,
        unit: "grammes",
      },
      {
        name: "Tomate",
        quantity: 2,
      },
      {
        name: "Oeuf dur",
        quantity: 2,
      },
      {
        name: "Maïs",
        quantity: 300,
        unit: "grammes",
      },
      {
        name: "Vinaigrette",
        quantity: 5,
        unit: "cl",
      },
    ],
    time: 50,
    description:
      "Faire cuire le riz. Une fois le riz cuit, le laisser refroidir. Couper les oeufs dur en quarts ou en lamelle au choix, coupez le tomates en dés, ajouter au riz les oeufs, les tomates, le poisson, le maïs et la vinaigrette. Ajouter au gout de chacun des corniches, olives etc..",
    appliance: "Cuiseur de riz",
    ustensils: ["saladier", "passoire"],
  },
  {
    id: 5,
    name: "Tarte au thon",
    servings: 4,
    ingredients: [
      {
        name: "Pâte feuilletée",
        quantity: 1,
      },
      {
        name: "Thon en miettes",
        quantity: 130,
        unit: "grammes",
      },
      {
        name: "Tomate",
        quantity: 2,
      },
      {
        name: "Crème fraiche",
        quantity: 2,
        unit: "cuillères à soupe",
      },
      {
        name: "gruyère râpé",
        quantity: 100,
        unit: "grammes",
      },
      {
        name: "Moutarde de Dijon",
        quantity: 1,
        unit: "cuillères à soupe",
      },
    ],
    time: 45,
    description:
      "Etaler la pâte feuilleté aux dimensions du moule, étaler la moutarde sur la pâte feuilleté, ajouter le thon. Découper les tomates en rondelles et les poser sur le poisson, ajouter un peu de crème fraiche sur toute la tarte et recouvrez de gruyère râpé. Cuire au four 30 minutes",
    appliance: "Four",
    ustensils: ["moule à tarte", "râpe à fromage", "couteau"],
  },
  {
    id: 6,
    name: "Tarte aux pommes",
    servings: 6,
    ingredients: [
      {
        name: "Pâte brisée",
        quantity: 1,
      },
      {
        name: "Pomme",
        quantity: 3,
      },
      {
        name: "Oeuf",
        quantity: 2,
      },
      {
        name: "Crème fraiche",
        quantity: 25,
        unit: "cl",
      },
      {
        name: "Sucre en Poudre",
        quantity: 100,
        unit: "grammes",
      },
      {
        name: "Sucre vanillé",
        quantity: 1,
        unit: "sachets",
      },
    ],
    time: 50,
    description:
      "Commencez par mélanger les oeufs le sucre et le sucre vanillé dans un saladier, découper les pommes en tranches, ajouter la crème fraiche aux oeufs. Une fois que tout est pret, étalez la tarte dans le moule. N'oubliez pas de piquer le fond avec une fourchette avant depositionner les pommes sur la tarte. Finallement verser la préparation à base d'oeufs et de crême fraiche. Laisser cuire au four pendant 30 minutes",
    appliance: "Four",
    ustensils: ["moule à tarte", "saladier", "fourchette"],
  },
  {
    id: 7,
    name: "Tartelettes au chocolat et aux fraises",
    servings: 6,
    ingredients: [
      {
        name: "Pâte sablée",
        quantity: 1,
      },
      {
        name: "Chocolat au lait",
        quantity: 300,
        unit: "grammes",
      },
      {
        name: "Crème liquide",
        quantity: 80,
        unit: "cl",
      },
      {
        name: "Beurre",
        quantity: 30,
        unit: "grammes",
      },
      {
        name: "Fraise",
        quantity: 6,
      },
    ],
    time: 50,
    description:
      "Etaler la pate dans les moules à tartelette. Faire cuire la pate 30 minutes. Découper le chocolat en morceau et le faire chauffer, y ajouter la crême liquide, ajouter le beurre et remuer jusqu'à avoir une pâte homogène. Verser la pate sur les tartelettes. Couper les fraises en 2 et les positionner sur ",
    appliance: "Four",
    ustensils: ["moule à tartelettes (6)", "casserole"],
  },
  {
    id: 8,
    name: "Brownie",
    servings: 10,
    ingredients: [
      {
        name: "Noix",
        quantity: 180,
        unit: "grammes",
      },
      {
        name: "Chocolat noir",
        quantity: 150,
        unit: "grammes",
      },
      {
        name: "Beurre",
        quantity: 120,
        unit: "grammes",
      },
      {
        name: "Oeuf",
        quantity: 2,
      },
      {
        name: "Sucre en Poudre",
        quantity: 110,
        unit: "grammes",
      },
      {
        name: "farine",
        quantity: 90,
        unit: "grammes",
      },
    ],
    time: 60,
    description:
      "Hachez les noix grossièrement. Faire fondre le chocolat avec le beurre. Mélanger les oeuf et le sucre et mélanger au chocolat. Ajouter la farine. Mélanger afin d'avoir quelque chose d'homogène puis incorporer les noix. Verser la préparation dans un moule de préférence rectangulaire. Cuire 2O à 25 minutes à 180°. Sortez du four et attendez quelques minutes pour démouler. Servir avec une boule de glace pour plus de gourmandise.",
    appliance: "Four",
    ustensils: ["moule à gateaux", "casserole"],
  },
  {
    id: 9,
    name: "Salade Méditerannéene fraiche au chèvre",
    servings: 4,
    ingredients: [
      {
        name: "Concombre",
        quantity: 1,
      },
      {
        name: "Olives",
      },
      {
        name: "Fromage de chèvre",
        quantity: 150,
        unit: "grammes",
      },
      {
        name: "Vinaigre Balsamic",
      },
      {
        name: "Huile d'olive",
      },
      {
        name: "Basilic",
      },
    ],
    time: 15,
    description:
      "Peler le concombre le couper 2, retirer les pépins. Couper les olives en morceaux, ainsi que le fromage de chèvre. Ajouter le basilic ainsi que le vinaigre balsamic et l'huile d'olives à votre gout.",
    appliance: "Saladier",
    ustensils: ["cuillère en bois", "couteau"],
  },
  {
    id: 10,
    name: "Tartiflette",
    servings: 4,
    ingredients: [
      {
        name: "Roblochon",
        quantity: 1,
      },
      {
        name: "Pommes de terre",
        quantity: 4.5,
        unit: "kg",
      },
      {
        name: "Jambon fumé",
        quantity: 2,
        unit: "tranches",
      },
      {
        name: "Oignon",
        quantity: 300,
        unit: "grammes",
      },
      {
        name: "Vin blanc sec",
        quantity: 30,
        unit: "cl",
      },
    ],
    time: 60,
    description:
      "Commencer par cuire les pommes de terre dans l'eau bouillante. Puis epluchez les et coupez les en rondelles. Emincer les oignons puis les faire dorer dans du beurre. Ajouter le jambon fumé coupé en en morceaux ainsi que les pommes de terres. Salez, poivrez à votre gout ( et celui de vos convives ) Laissez cuisiner durant environ 10 minutes puis ajouter le vin blanc. Après 5 minutes, mettre le tout dans un plat à gratin. Coupez le rebelochon, soit en tranches, soit le couper en 2 dans le sens de l'épaisseur et recouvrir les pommes de terre. Cuire au four (environ 220°) durant 25 minutes. C'est prêt !",
    appliance: "Four",
    ustensils: ["plat à gratin", "couteau", "Économe"],
  },
  {
    id: 11,
    name: "Salade tomate, mozzarella et pommes",
    servings: 4,
    ingredients: [
      {
        name: "Tomates cerises",
        quantity: 250,
        unit: "grammes",
      },
      {
        name: "Mozzarella",
        quantity: 150,
        unit: "grammes",
      },
      {
        name: "Jambon de parme",
        quantity: 4,
        unit: "tranches",
      },
      {
        name: "Pommes",
        quantity: 1,
      },
      {
        name: "Salade Verte",
        quantity: 1,
      },
      {
        name: "Vinaigrette",
        quantity: 5,
        unit: "cl",
      },
    ],
    time: 10,
    description:
      "Commencer par couper les feuilles de salade, ajouter les tomates cerises et le fromage découpé en cubes ou en boules avec la cuillère à melon. Découper le jambon de parme en fines lamelles. Ajouter la pomme elle aussi découpée en petit morceaux. Assaisonnez à votre gout. ",
    appliance: "Saladier",
    ustensils: ["couteau", "cuillère à melon"],
  },
  {
    id: 12,
    name: "Compote pomme rhubarbe",
    servings: 4,
    ingredients: [
      {
        name: "Rhubarbe",
        quantity: 160,
        unit: "grammes",
      },
      {
        name: "Pommes",
        quantity: 8,
      },
      {
        name: "Sucre vanillé",
        quantity: 6,
        unit: "sachets",
      },
      {
        name: "Eau",
        quantity: 0.5,
        unit: "tasses",
      },
    ],
    time: 40,
    description:
      "Éplucher les fruits et les couper en morceaux, les mettre dans une casserolle en ajoutant l'eau et le sucre vanillé. Laisser cuire 15 minutes en remuant régulièrement.",
    appliance: "Casserole",
    ustensils: ["couteau", "économe"],
  },
  {
    id: 13,
    name: "Salade mâchée de patates",
    servings: 2,
    ingredients: [
      {
        name: "Mâche",
        quantity: 60,
        unit: "grammes",
      },
      {
        name: "Pommes de terre",
        quantity: 200,
        unit: "grammes",
      },
      {
        name: "Échalote",
        quantity: 2,
      },
      {
        name: "Vinaigre de cidre",
        quantity: 1,
        unit: "cuillère à soupe",
      },
      {
        name: "huile d'olive",
        quantity: 2,
        unit: "cuillère à soupe",
      },
    ],
    time: 40,
    description:
      "Cuire les pommes de terre environ 30 minutes. Découper les échalottes finement. Durant la cuisson des pommes de terre. Préparez la vinaigrette avec l'huile d'olive et le vinaigre de cidre. Salez poivrez à discrétion. Dans un saladier, mettre le mâche. Ajouter",
    appliance: "Casserole",
    ustensils: ["couteau", "saladier", "cuillère en bois"],
  },
  {
    id: 14,
    name: "Galette Bretonne Saucisse et Fromage à raclette",
    servings: 2,
    ingredients: [
      {
        name: "Saucisse bretonne ou de toulouse",
        quantity: 2,
      },
      {
        name: "Farine de blé noir",
        quantity: 130,
        unit: "grammes",
      },
      {
        name: "Oeuf",
        quantity: 1,
      },
      {
        name: "Fromage à raclette",
        quantity: 300,
        unit: "grammes",
      },
      {
        name: "Oignon",
        quantity: 1,
      },
      {
        name: "Beurre",
        quantity: 75,
        unit: "grammes",
      },
    ],
    time: 100,
    description:
      "Mélanger la farine et les oeufs, faire fondre 25 grammes de beurre et ajouter à la pâte. Ajouter du sel. Laisser reposer 1 heure. Faire les galettes et laisser refroidire. Faire chauffer les saucisses avec du beurre et l'oignon. Enrouler les saucisses dans les crêpes avec une partie du fromage. Mettre le reste du fromage à raclette par dessus les crêpes. Passer four pendant 20 minutes",
    appliance: "Four",
    ustensils: ["poelle à frire", "couteau"],
  },
  {
    id: 15,
    name: "Crêpes Chocolat Banane",
    servings: 10,
    ingredients: [
      {
        name: "Oeuf",
        quantity: 3,
      },
      {
        name: "Farine",
        quantity: 250,
        unit: "grammes",
      },
      {
        name: "Lait",
        quantity: 600,
        unit: "ml",
      },
      {
        name: "Beurre salé",
        quantity: 30,
        unit: "grammes",
      },
      {
        name: "Chocolat au lait",
        quantity: 100,
        unit: "grammes",
      },
      {
        name: "Banane",
        quantity: 4,
      },
    ],
    time: 60,
    description:
      "Mélangez dans un saladier, la farine, les oeufs, et le lait. Battez jusqu'à avoir une masse homogène. Pendant ce temps faites fondre le beurre et ajoutez en une partie à la pâte à crêpes. Faire fondre le chocolat ( avec le reste du beurre salé ). Lorsque vous chauffez les crêpes. Ajouter le chocolat fondu et les bananes coupées en rondelles. Ajoutez une touche de chantilly pour les gourmands",
    appliance: "Poële à crêpe",
    ustensils: ["saladier", "louche", "cuillère en bois"],
  },
  {
    id: 16,
    name: "Gratin de pâtes à la tomate",
    servings: 2,
    ingredients: [
      {
        name: "Tomate",
        quantity: 500,
        unit: "grammes",
      },
      {
        name: "Mozzarella",
        quantity: 250,
        unit: "grammes",
      },
      {
        name: "Pennes",
        quantity: 500,
        unit: "grammes",
      },
      {
        name: "Basilic",
        quantity: 1,
        unit: "tiges",
      },
      {
        name: "huile d'olives",
        quantity: 2,
        unit: "cuillère à soupe",
      },
    ],
    time: 45,
    description:
      "Faire cuire les pâtes si vous n'avez pas de pennes des coquillettes peuvent faire l'affaire. Découper les tomates en petits morceaux, soit en tranches soit en dés. Coupez le basilic en petites morceaux et mélangez le aux tomates.  Coupez la mozzarella en tranche. Préchauffez le four à 200°. Alternez entre couches de pattes et couches de tomates, terminez par une couche de pates et recouvrir du fromage. Laisser au four 30 minutes et régalez vous ! Une recette simple qui fera plaisir au petits comme aux grands.",
    appliance: "Four",
    ustensils: ["plat à gratin", "couteau", "râpe à fromage"],
  },
  {
    id: 17,
    name: "Smoothie à la fraise",
    servings: 6,
    ingredients: [
      {
        name: "Fraise",
        quantity: 500,
        unit: "grammes",
      },
      {
        name: "Pastèque",
        quantity: 0.5,
      },
      {
        name: "Jus de citron",
        quantity: 1,
        unit: "cuillères à soupe",
      },
      {
        name: "Glaçons",
        quantity: 8,
      },
      {
        name: "Menthe",
      },
    ],
    time: 15,
    description:
      "Coupez les fraises en morceaux, découpez la chaire de la pastèque en retirant les pépins. Mettre le tout dans le blender. Ajouter un cuillière à soupe de juste de citron ainsi que les glaçons. Ajoutez quelques fueilles de menthe pour plus de fraicheur. Mixez le tout. Servir et déguster.",
    appliance: "Blender",
    ustensils: ["verres", "couteau", "presse citron"],
  },
  {
    id: 18,
    name: "Smoothie ananas et vanille",
    servings: 5,
    ingredients: [
      {
        name: "Ananas",
        quantity: 1,
      },
      {
        name: "Glace à la vanille",
        quantity: 500,
        unit: "ml",
      },
      {
        name: "Lait",
        quantity: 50,
        unit: "cl",
      },
    ],
    time: 10,
    description:
      "Séparez 1/5ème d'Ananas ( une belle tranche qui servira pour la décoration des verres ), mettre le reste coupé en cubes au blender, ajouter la glace à la vanille et le lait. Mixez. Servir et décorer avec l'ananas restant. C'est prêt",
    appliance: "Blender",
    ustensils: ["verres", "couteau"],
  },
  {
    id: 19,
    name: "Shake Banane Kiwi",
    servings: 4,
    ingredients: [
      {
        name: "Kiwi",
        quantity: 4,
      },
      {
        name: "Citron",
        quantity: 1,
      },
      {
        name: "Lait",
        quantity: 1,
        unit: "litres",
      },
      {
        name: "Sucre glace",
        quantity: 30,
        unit: "grammes",
      },
      {
        name: "Banane",
        quantity: 1,
      },
    ],
    time: 0,
    description:
      "Coupez les fruits en morceaux, ajouter le jus de citron et le lait ainsi que le sucre glace. Mixez. Ajoutez des glaçons si le lait n'a pas été mis au frais.",
    appliance: "Blender",
    ustensils: ["couteau", "verres", "presse citron"],
  },
  {
    id: 20,
    name: "Pates Carbonara",
    servings: 5,
    ingredients: [
      {
        name: "Tagliatelles",
        quantity: 500,
        unit: "grammes",
      },
      {
        name: "Lardons",
        quantity: 150,
        unit: "grammes",
      },
      {
        name: "Crème fraiche",
        quantity: 200,
        unit: "grammes",
      },
      {
        name: "Parmesan",
        quantity: 100,
        unit: "grammes",
      },
      {
        name: "huile d'olive",
        quantity: 1,
        unit: "cuillères à soupe",
      },
    ],
    time: 30,
    description:
      "Faire cuire les pates comme indiqué sur le paquet. Dorer les lardons dans une sauteuse avec l'huile d'olive. Ajouter la crême fraiche et baisser le feu au minimum. Quand les Tagliatelles sont prêtes les mettre dans la sauteuse et bien mélanger le tout en ajoutant le jaune d'oeuf. Servir et ajouter le parmesan râpé.",
    appliance: "Sauteuse",
    ustensils: ["râpe à fromage", "cuillère en bois"],
  },
  {
    id: 21,
    name: "Spaghettis à la bolognaise",
    servings: 4,
    ingredients: [
      {
        name: "Spaghettis",
        quantity: 400,
        unit: "grammes",
      },
      {
        name: "Oignon",
        quantity: 2,
      },
      {
        name: "Coulis de tomate",
        quantity: 300,
        unit: "grammes",
      },
      {
        name: "Viande hachée 1% de matière grasse",
        quantity: 400,
        unit: "grammes",
      },
      {
        name: "Vin rouge",
        quantity: 20,
        unit: "cl",
      },
      {
        name: "Crème Fraiche",
        quantity: 1,
        unit: "cuillères à soupe",
      },
    ],
    time: 30,
    description:
      "Cuisiner la viande hachée dans une poelle à frire. Dans une autre faire cuire les oignons découpés en fins dés avec un peu de beurre. Ajouter du vin rouge. Mélanger les oigons avec la viande hachée. Faire cuire les pates le temps indiqué sur le paquet. Ajouter le coulis de tomates à la viande hachée. Une fois que les pates sont cuites, ajouter la crème fraiche à la viande hachée. Serivir.",
    appliance: "Casserole",
    ustensils: ["Cuillère en bois", "louche", "couteau"],
  },
  {
    id: 22,
    name: "Fondant au chocolat",
    servings: 4,
    ingredients: [
      {
        name: "Beurre",
        quantity: 160,
        unit: "grammes",
      },
      {
        name: "Chocolat noir",
        quantity: 200,
        unit: "grammes",
      },
      {
        name: "Farine",
        quantity: 50,
        unit: "grammes",
      },
      {
        name: "Oeuf",
        quantity: 4,
      },
      {
        name: "Sucre",
        quantity: 150,
        unit: "grammes",
      },
    ],
    time: 30,
    description:
      "Faire fondre le chocolat et le beurre au bain marie. Dans un saladier battre les oeufs avec le sucre jusqu'à obtenir une texture de type mousse. Ajouter la farine ainsi que le mélange de beurre et chocolat fondu. Beurrez le moule à gateaux. Mettre au four préchauffé à 200° puis faites chauffer pendant 15 minutes. C'est prêt. Servir avec une boule de glace ou une crême dessert.",
    appliance: "Four",
    ustensils: ["moule à gateaux", "fouet", "casserole"],
  },
  {
    id: 23,
    name: "Quiche lorraine",
    servings: 4,
    ingredients: [
      {
        name: "Pâte brisée",
        quantity: 200,
        unit: "grammes",
      },
      {
        name: "Lardons",
        quantity: 200,
        unit: "grammes",
      },
      {
        name: "Beurre",
        quantity: 30,
        unit: "grammes",
      },
      {
        name: "Oeuf",
        quantity: 3,
      },
      {
        name: "Crème Fraîche",
        quantity: 20,
        unit: "cl",
      },
      {
        name: "Lait",
        quantity: 20,
        unit: "cl",
      },
    ],
    time: 60,
    description:
      "Etaler la pate dans un moule et la piquer.Parsemer de beurre. Faire chauffer les lardon dans une poêle. Battre les oeufs en ajoutant la crème fraîche et le lait. Finalement ajouter les lardons, salez poivrez à votre gout. Verser l'ensemble sur la pâte. Cuire environ 50 minutes.",
    appliance: "Four",
    ustensils: ["moule à gateaux", "rouleau à patisserie", "fouet"],
  },
  {
    id: 24,
    name: "Salade de pâtes",
    servings: 4,
    ingredients: [
      {
        name: "Thon en miettes",
        quantity: 160,
        unit: "grammes",
      },
      {
        name: "Maïs",
        quantity: 60,
        unit: "grammes",
      },
      {
        name: "Tomate",
        quantity: 1,
      },
      {
        name: "Concombre",
        quantity: 0.5,
      },
      {
        name: "Macaronis",
        quantity: 300,
        unit: "grammes",
      },
      {
        name: "Mayonnaise",
        quantity: 2,
        unit: "cuillères à soupe",
      },
    ],
    time: 40,
    description:
      "Découper le concombre et les tomates en dés, les mettre dans un saladier avec le mais et les miettes de poisson, ajouter les pates. Ajouter la mayonnaise. Mélanger le tout et servir frais.",
    appliance: "Saladier",
    ustensils: ["couteau", "cuillère en bois"],
  },
  {
    id: 25,
    name: "Cookies",
    servings: 4,
    ingredients: [
      {
        name: "Sucre",
        quantity: 100,
        unit: "grammes",
      },
      {
        name: "Beurre",
        quantity: 100,
        unit: "grammes",
      },
      {
        name: "Farine",
        quantity: 100,
        unit: "grammes",
      },
      {
        name: "Chocolat noir en pepites",
        quantity: 100,
        unit: "grammes",
      },
      {
        name: "Oeuf",
        quantity: 1,
      },
    ],
    time: 30,
    description:
      "Faire fondre le beurre et le mélanger avec le sucre. Finalement ajouter l'oeuf. Ajouter la farine tout en mélangeant peu pa peu pour avoir une masse sans grumaux. Ajouter les pépites de chocolat. Faire, une plaque de cuisson de petites boules pour les cookies. Mettre au four à 180° pour 10 minutes.",
    appliance: "Four",
    ustensils: ["fouet", "saladier", "plaque de cuisson"],
  },
  {
    id: 26,
    name: "Soupe de tomates",
    servings: 2,
    ingredients: [
      {
        name: "Tomate",
        quantity: 6,
      },
      {
        name: "Pommes de terre",
        quantity: 1,
      },
      {
        name: "Huile d'olives",
      },
      {
        name: "Oignon",
        quantity: 1,
      },
      {
        name: "Ail",
        quantity: 1,
        unit: "gousses",
      },
    ],
    time: 25,
    description:
      "Verser de l'huile dans une cocotte minute couper les légumes et les verser dans l'huile chaude. Laisser cuire et remuer pendant 10 minutes. Passer aux mixer. Servir.",
    appliance: "Mixer",
    ustensils: ["cocotte minute", "couteau"],
  },
  {
    id: 27,
    name: "Soupe à l'oseille",
    servings: 4,
    ingredients: [
      {
        name: "Oseille",
        quantity: 2,
      },
      {
        name: "Oeuf",
        quantity: 1,
      },
      {
        name: "Crème fraîche",
        quantity: 4,
        unit: "cuillère à soupe",
      },
      {
        name: "Vermicelles",
        quantity: 1,
        unit: "verres",
      },
      {
        name: "Beurre salé",
        quantity: 50,
        unit: "grammes",
      },
    ],
    time: 15,
    description:
      "Faire fondre l'oseille avec du beurre demi sel, ajouter un litre d'eau. Ajouter les vermicelles. Laisser cuire. une foit prêt, sortir du feu et après 5 minutes ajouter le jaune d'oeuf et la crême fraîche",
    appliance: "Casserole",
    ustensils: ["couteau", "cuillère en bois"],
  },
  {
    id: 28,
    name: "Soupe de poireaux",
    servings: 4,
    ingredients: [
      {
        name: "Poireau",
        quantity: 3,
      },
      {
        name: "Pommes de terre",
        quantity: 400,
        unit: "grammes",
      },
      {
        name: "Oseille",
        quantity: 75,
        unit: "grammes",
      },
      {
        name: "Beurre",
        quantity: 50,
        unit: "grammes",
      },
      {
        name: "Crême fraîche",
        quantity: 10,
        unit: "cl",
      },
    ],
    time: 80,
    description:
      "Emincer les blanc de poireaux et les faire chauffer dans 25 grammes de beurre. AJouter les pommes de terres coupées en morceaux. Ajouter l'eau et laisser mijoter pour 45 minutes. Chauffer l'oseille avec le beurre restant puis incorporer le tout. Mixez. Ajoutez la crème. Bon appetit.",
    appliance: "Mixer",
    ustensils: ["casserole", "couteau"],
  },
  {
    id: 29,
    name: "Houmous Express",
    servings: 2,
    ingredients: [
      {
        name: "Pois chiches",
        quantity: 1,
        unit: "boites",
      },
      {
        name: "Ail",
        quantity: 1,
        unit: "gousses",
      },
      {
        name: "Citron",
        quantity: 2,
      },
      {
        name: "Huile d'olive",
      },
      {
        name: "Paprika",
      },
    ],
    time: 30,
    description:
      "Prendre les pois chiches, les mettre dans le mixer avec de l'huile d'olive, ajouter le jus des 2 citrons et du paprika selon le gout.",
    appliance: "Mixer",
    ustensils: ["cuillère en bois", "presse citron"],
  },
  {
    id: 30,
    name: "Purée de pois cassés",
    servings: 4,
    ingredients: [
      {
        name: "Pois Cassé",
        quantity: 500,
        unit: "grammes",
      },
      {
        name: "Oignon",
        quantity: 1,
      },
      {
        name: "Ail",
        quantity: 2,
        unit: "gousses",
      },
    ],
    time: 60,
    description:
      "Mettre tous les ingrédients dans une cocotte. ajouter de l'eau pour recouvrir l'ensemble et laisser cuirre à petit feur pour 1 heure. Passer au mixer. Salez, poivrez. C'est prêt",
    appliance: "Mixer",
    ustensils: ["casserole", "cuillère en bois"],
  },
  {
    id: 31,
    name: "Jardinière de légumes",
    servings: 4,
    ingredients: [
      {
        name: "Carotte",
        quantity: 2,
      },
      {
        name: "Pommes de terre",
        quantity: 2,
      },
      {
        name: "Haricots verts",
        quantity: 150,
        unit: "grammes",
      },
      {
        name: "Petits poids",
        quantity: 100,
        unit: "grammes",
      },
      {
        name: "Lardons",
        quantity: 150,
        unit: "grammes",
      },
    ],
    time: 60,
    description:
      "Découper en cubes les carottes et pommes de terre. Faire revenir dans du beurre. Ajouter les lardons, une fois les lardons dorés, ajouter un grand verre d'eau. Ajouter les petit poids et les haricots verts ( tous deux pré cuits ). Ajouter Sel, poivre, thyms et laurier",
    appliance: "Poële",
    ustensils: ["Couteau", "économe"],
  },
  {
    id: 32,
    name: "Croque Monsieur à la dinde",
    servings: 4,
    ingredients: [
      {
        name: "Pain de mie",
        quantity: 8,
        unit: "tranches",
      },
      {
        name: "Blanc de dinde",
        quantity: 4,
        unit: "tranches",
      },
      {
        name: "Emmental",
        quantity: 8,
        unit: "tranches",
      },
      {
        name: "Gruyère",
        quantity: 100,
        unit: "grammes",
      },
      {
        name: "Lait",
        quantity: 5,
        unit: "cl",
      },
      {
        name: "Noix de muscade",
        quantity: 1,
        unit: "pincées",
      },
    ],
    time: 20,
    description:
      "Beurrer les tranches de pain, ajouter entre 2 tranches de pain de mie 1 tranche d'émental, une de blanc de dinde, et une autre d'emmental. Dans un récipient, mélanger le gruyère rappé avec le lait et la noix de muscade. Mettre sur les croque monsieux. Placer au four durnat 10 minutes.",
    appliance: "Four",
    ustensils: ["râpe à fromage", "cuillère à Soupe", "couteau"],
  },
  {
    id: 33,
    name: "Sandwich au saumon fumé",
    servings: 4,
    ingredients: [
      {
        name: "Pain de mie",
        quantity: 8,
        unit: "tranches",
      },
      {
        name: "Saumon Fumé",
        quantity: 4,
        unit: "tranches",
      },
      {
        name: "Feuilles de laitue",
        quantity: 4,
      },
      {
        name: "Fromage blanc",
        quantity: 4,
        unit: "cuillères à soupe",
      },
      {
        name: "Jus de citron",
        quantity: 1,
        unit: "cuillères à soupe",
      },
    ],
    time: 5,
    description:
      "Mélanger le fromage blanc avec le citron. Ajouter un peu de sel et poivre à votre gout. Faire dorer le pain de mie. Puis étaler le mélange. Ajouter une feuille de salade puis le saumon fumé. C'est prêt.",
    appliance: "Four",
    ustensils: ["couteau", "cuillère en bois"],
  },
  {
    id: 34,
    name: "Purée de patate douce",
    servings: 4,
    ingredients: [
      {
        name: "Patate douce",
        quantity: 800,
        unit: "grammes",
      },
      {
        name: "Crème fraîche",
        quantity: 20,
        unit: "cl",
      },
      {
        name: "Huile d'olive",
      },
      {
        name: "Orange",
        quantity: 1,
      },
    ],
    time: 25,
    description:
      "Eplucher les patates douces et coupez les en morceaux. Les faire cuire durant 20 minute dans une casserolle d'eau bouillante. Passer au mixer en ajoutant la crème et l'huile d'olive à son gout. Salez, poivrez. Pressez l'orange et ajouter le jus à l'ensemble. Servir.",
    appliance: "Mixer",
    ustensils: ["couteau", "économe", "cuillère en bois"],
  },
  {
    id: 35,
    name: "Purée de carottes",
    servings: 2,
    ingredients: [
      {
        name: "Carotte",
        quantity: 6,
      },
      {
        name: "Pommes de terre",
        quantity: 1,
      },
      {
        name: "Beurre",
        quantity: 20,
        unit: "grammes",
      },
      {
        name: "Crème fraîche",
        quantity: 2,
        unit: "cuillères à soupe",
      },
      {
        name: "Cumin",
        quantity: 1,
        unit: "cuillères à café",
      },
      {
        name: "Noix de muscade",
        quantity: 1,
        unit: "pincées",
      },
    ],
    time: 25,
    description:
      "Éplucher les légumes, les couper en morceaux et les mettre à cuire dans une cocotte minute environ 15 minutes. Mixer en ajoutant le beurre, la crème. Ajouter le cumun et la noix de muscade.",
    appliance: "Mixer",
    ustensils: ["cocotte minute", "couteau", "cuillère en bois"],
  },
  {
    id: 36,
    name: "Lasagne Courgettes et Chèvre",
    servings: 2,
    ingredients: [
      {
        name: "Courgette",
        quantity: 2,
      },
      {
        name: "Fromage de chèvre",
        quantity: 4,
      },
      {
        name: "Lait",
        quantity: 25,
        unit: "cl",
      },
      {
        name: "Lasagnes",
        quantity: 5,
        unit: "feuilles",
      },
      {
        name: "Gruyère",
        quantity: 40,
        unit: "grammes",
      },
      {
        name: "Maïzena",
        quantity: 1,
        unit: "cuillères à soupe",
      },
    ],
    time: 35,
    description:
      "Raper les courgette et les faire revenir durant 15 minutes. Ajouter les fromages de chèvre frais. Préparer la béchamelle avec le lait et la maizena. Salez poivrez, ajouter de la noix de muscade selon les gouts. Dans un plat, mettre un peu de sauces au fond, puis des lasagnes, puis des courgettes etc... terminer par de la sauces et ajouter le gruiyère. Passer au four à 180° durant 20 à 25 minutes.",
    appliance: "Four",
    ustensils: ["plat à gratin", "râpe à fromage", "fouet"],
  },
  {
    id: 37,
    name: "Courgettes farcies au boeuf",
    servings: 2,
    ingredients: [
      {
        name: "Courgette",
        quantity: 2,
      },
      {
        name: "Viande hachée",
        quantity: 600,
        unit: "grammes",
      },
      {
        name: "Huile d'olives",
        quantity: 25,
        unit: "cl",
      },
      {
        name: "Oignon",
        quantity: 1,
      },
      {
        name: "Coulis de tomates",
        quantity: 20,
        unit: "cl",
      },
      {
        name: "Gruyère",
        quantity: 50,
        unit: "grammes",
      },
    ],
    time: 60,
    description:
      "Couper les courgettes dans le sens de la longueur. Vider les courgette dans un saladier. Réserver.Faire revenir la chair des courgettes dans 25cl d'huile d'olive. Ajouter l'oignon puis la viande hachée. Mettre la farce dans les courgettes. Ajouter le coulis de tomates. Mettre au four pendant 30 minutes. Avant la fin de la cuisson ajouter le fromage rapé",
    appliance: "Four",
    ustensils: ["couteau", "cuillère en bois", "poelle à frire"],
  },
  {
    id: 38,
    name: "Pain Perdu",
    servings: 4,
    ingredients: [
      {
        name: "Pain",
        quantity: 6,
        unit: "tranches",
      },
      {
        name: "Lait",
        quantity: 25,
        unit: "cl",
      },
      {
        name: "Oeuf",
        quantity: 3,
      },
      {
        name: "Sucre roux",
        quantity: 75,
        unit: "grammes",
      },
    ],
    time: 20,
    description:
      "Fouettez les oeufs, le sucre et le lait. tremper les tranches de pain. Le cuire au four pendant environ 10 minutes à 180°. Servir",
    appliance: "Four",
    ustensils: ["fouet", "bol", "Cuillère à Soupe"],
  },
  {
    id: 39,
    name: "Crumble aux pommes",
    servings: 40,
    ingredients: [
      {
        name: "Pomme",
        quantity: 2,
      },
      {
        name: "Farine",
        quantity: 100,
        unit: "grammes",
      },
      {
        name: "Beurre",
        quantity: 50,
        unit: "grammes",
      },
      {
        name: "Sucre roux",
        quantity: 80,
        unit: "grammes",
      },
    ],
    time: 40,
    description:
      "Découper les pommes en dé. Mélanger dans un saladier la farine, le sucre et le beurre. Bien mélanger. Beurrer le moule et ajouter les pommes. Par dessus placez la pate que vous avez obtenu. Cuire 20 minutes au four",
    appliance: "Four",
    ustensils: ["saladier", "couteau", "fouet"],
  },
  {
    id: 40,
    name: "Limonade",
    servings: 4,
    ingredients: [
      {
        name: "Eau",
        quantity: 1,
        unit: "Litres",
      },
      {
        name: "Citron Vert",
        quantity: 3,
      },
      {
        name: "Sucre en poudre",
        quantity: 4,
        unit: "cuillères à café",
      },
      {
        name: "Bicarbonate",
        quantity: 1,
        unit: "cuillères à café",
      },
    ],
    time: 10,
    description:
      "Dans un saladier mettre l'eau, le jus des cirtons et le sucre. Bien mélanger. Ajouter le bicarbonate. Servir. Ajouter des glaçon et une feuille de menthe pour la déco.",
    appliance: "Saladier",
    ustensils: ["cuillère en bois"],
  },
  {
    id: 41,
    name: "Mousse au chocolat",
    servings: 4,
    ingredients: [
      {
        name: "Oeuf",
        quantity: 3,
      },
      {
        name: "Chocolat noir",
        quantity: 100,
        unit: "grammes",
      },
      {
        name: "Sucre vanillé",
        quantity: 1,
        unit: "sachets",
      },
    ],
    time: 20,
    description:
      "Séparer les blancs d'oeufs. Faire fondre le chocolat au bain marie. Ajouter les jaunes et le sucre au chocolat hors du feu. Battre les blancs en neige. Ajouter les blancs au mélange de chocolat. Mélangez délicatement avec une spatule. Servir dans un plat ou dans des verres. Mettre au frais",
    appliance: "Casserole",
    ustensils: ["fouet", "spatule", "verres"],
  },
  {
    id: 42,
    name: "Charlotte au poires",
    servings: 3,
    ingredients: [
      {
        name: "Chocolat",
        quantity: 200,
        unit: "grammes",
      },
      {
        name: "Oeuf",
        quantity: 3,
      },
      {
        name: "Poires au jus",
        quantity: 0.5,
        unit: "boites",
      },
      {
        name: "Boudoirs",
        quantity: 15,
      },
    ],
    time: 60,
    description:
      "Commencez par préparer la mousse au chocolat au moins 2 heures avant. Quand la mousse est prête et a reposée. Alors mouiller les boudoirs dans le jus des poires. Disposer. Alterner : mousse au chocolat, boudoirs et poires. Mettre au frais.",
    appliance: "Moule à charlotte",
    ustensils: ["saladier", "couteau", "fouet"],
  },
  {
    id: 43,
    name: "Tarte au citron",
    servings: 6,
    ingredients: [
      {
        name: "Pâte brisée",
        quantity: 200,
        unit: "grammes",
      },
      {
        name: "Sucre",
        quantity: 150,
        unit: "grammes",
      },
      {
        name: "Beurre fondu",
        quantity: 100,
        unit: "grammes",
      },
      {
        name: "Oeuf",
        quantity: 3,
      },
      {
        name: "Citron",
      },
    ],
    time: 50,
    description:
      "Préchauffez le fours à 200°. Etaler la pate. La mettre dans un moule. Battre les oeufs avec le sucre. Ajouter le jus de citron et le beurre. Verser le tout sur la pate. Au four 30 minutes. Bon appetit ",
    appliance: "Four",
    ustensils: ["rouleau à patisserie", "moule à tarte", "presse citron"],
  },
  {
    id: 44,
    name: "Crème déssert au chocolat",
    servings: 6,
    ingredients: [
      {
        name: "Lait",
        quantity: 1,
        unit: "litres",
      },
      {
        name: "Chocolat",
        quantity: 200,
        unit: "grammes",
      },
      {
        name: "Sucre",
        quantity: 100,
        unit: "grammes",
      },
      {
        name: "Beurre",
        quantity: 50,
        unit: "grammes",
      },
      {
        name: "farine",
        quantity: 40,
        unit: "grammes",
      },
    ],
    time: 15,
    description:
      "Mélanger la farine et le beurre fondu en ajoutant le lait peu à peu. Ajouter du sucre après la cuisson. Bien mélanger. Ajouter le chocolat en morceaux et laisser chauffer 8 minutes en mélangeant avec une cuillère en bois. Mettre dans des verres",
    appliance: "Casserole",
    ustensils: ["cuillère en bois"],
  },
  {
    id: 45,
    name: "Crème patissière",
    servings: 8,
    ingredients: [
      {
        name: "Lait",
        quantity: 50,
        unit: "cl",
      },
      {
        name: "Oeuf",
        quantity: 2,
      },
      {
        name: "Farine",
        quantity: 30,
        unit: "grammes",
      },
      {
        name: "Sucre",
        quantity: 80,
        unit: "grammes",
      },
    ],
    time: 30,
    description:
      "Faire bouillir le lait ( on peut y ajouter de l'essence de vanille. Battre les oeufs et le sucre, ajouter la farine puis finalement ajouter le lait chaud. Remettre à feu doux pour faire épaissir en remuant pendant 5 à 10 minutes.",
    appliance: "Casserole",
    ustensils: ["fouet", "saladier"],
  },
  {
    id: 46,
    name: "Far breton",
    servings: 6,
    ingredients: [
      {
        name: "Farine",
        quantity: 250,
        unit: "grammes",
      },
      {
        name: "Sucre",
        quantity: 150,
        unit: "grammes",
      },
      {
        name: "Sucre vanillé",
        quantity: 1,
        unit: "sachets",
      },
      {
        name: "Oeuf",
        quantity: 4,
      },
      {
        name: "Lait",
        quantity: 1,
        unit: "litre",
      },
      {
        name: "Pruneaux",
        quantity: 100,
        unit: "grammes",
      },
    ],
    time: 60,
    description:
      "Mélanger la farine avec le sucre et les oeufs en ajoutant du sucre vanillé. Ajouter le lait petit à petit. Ajouter un petit vers de rhum. Verser la masse dans un plat beurré y placer les pruneaux et faire cuire à 200° pendant 45 minutes",
    appliance: "Four",
    ustensils: ["fouet", "moule", "verres"],
  },
  {
    id: 47,
    name: "Mousse au citron",
    servings: 6,
    ingredients: [
      {
        name: "Jus de citron",
        quantity: 100,
        unit: "grammes",
      },
      {
        name: "Mascarpone",
        quantity: 250,
        unit: "grammes",
      },
      {
        name: "Sucre",
        quantity: 100,
        unit: "grammes",
      },
      {
        name: "Crème Fraîche",
        quantity: 20,
        unit: "cl",
      },
    ],
    time: 5,
    description:
      "Mélanger le jus de citron avec le sucre et la mascarpone. Ajouter la crème fraiche. Mélanger le tout et mettre au congélateur pendant 1 heure. Servir",
    appliance: "Saladier",
    ustensils: ["fouet", "verres", "cuillère en bois"],
  },
  {
    id: 48,
    name: "Pizza",
    servings: 4,
    ingredients: [
      {
        name: "Pâte à pizza",
        quantity: 1,
      },
      {
        name: "Tomates pelées",
        quantity: 1,
        unit: "boites",
      },
      {
        name: "Lardons",
        quantity: 1,
        unit: "barquettes",
      },
      {
        name: "Champignons de paris",
        quantity: 1,
        unit: "boites",
      },
      {
        name: "Gruyère",
        quantity: 200,
        unit: "grammes",
      },
    ],
    time: 40,
    description:
      "Étaler la pate a pizza. Ecraser les tomates pelées, les étaler sur la pâte, ajouter les lardons et les champignons. Ajouter le gruyère eet passer au four à 220° durant 20 minutes",
    appliance: "Four",
    ustensils: ["rouleau à patisserie", "râpe à fromage", "couteau"],
  },
  {
    id: 49,
    name: "Smoothie tropical",
    servings: 4,
    ingredients: [
      {
        name: "Bananes",
        quantity: 2,
      },
      {
        name: "Kiwis",
        quantity: 3,
      },
      {
        name: "Mangue",
        quantity: 1,
      },
      {
        name: "Ananas",
        quantity: 4,
        unit: "tranches",
      },
      {
        name: "Miel",
        quantity: 2,
        unit: "cuillères à soupe",
      },
    ],
    time: 0,
    description:
      "Découper les fruits. Le passer au blender jusqu'à obtenir une texture liquide. Mettre au frais. Servir",
    appliance: "Blender",
    ustensils: ["couteau", "verres"],
  },
  {
    id: 50,
    name: "Frangipane",
    servings: 2,
    ingredients: [
      {
        name: "Pâte feuilletée",
        quantity: 400,
        unit: "grammes",
      },
      {
        name: "Oeuf",
        quantity: 6,
      },
      {
        name: "Poudre d'amendes",
        quantity: 500,
        unit: "grammes",
      },
      {
        name: "Beurre",
        quantity: 500,
        unit: "grammes",
      },
      {
        name: "Sucre glace",
        quantity: 500,
        unit: "grammes",
      },
    ],
    time: 60,
    description:
      "Préparer la frangipane : Mélanger le sucre la poudre d'amander, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes",
    appliance: "Four",
    ustensils: ["rouleau à patisserie", "fouet"],
  },
];
