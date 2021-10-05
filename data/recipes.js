const recipesData   =  [
    {
        "identifiant" : 1 ,
        "nom" : "Limonade de Coco" ,
        "portions" : 1 ,
        "ingredients" : [
            {
                "ingredient" : "Lait de coco" ,
                "quantite" : 400 ,
                "unite" : "ml"
            } ,
            {
                "ingredient" : "Jus de citron" ,
                "quantite" : 2
            } ,
            {
                "ingredient" : "Crème de coco" ,
                "quantite" : 2 ,
                "unite" : "cuillères à soupe"
            } ,
            {
                "ingredient" : "Sucre" ,
                "quantite" : 30 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Glaçons"
            }
        ] ,
        "temps" : 10 ,
        "description" : "Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistance désirée" ,
        "appareil" : "Mixeur" ,
        "ustensiles" : [ "cuillère à Soupe" ,  "Verrès" ,  "presse cédrat"  ]
    } ,
    {
        "identifiant" : 2 ,
        "nom" : "Poisson Cru à la tahitienne" ,
        "portions" : 2 ,
        "ingredients" : [
            {
                "ingredient" : "Thon Rouge (ou blanc)" ,
                "quantite" : 200 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Concombre" ,
                "quantite" : 1
            } ,
            {
                "ingredient" : "Tomate" ,
                "quantite" : 2
            } ,
            {
                "ingredient" : "Carotte" ,
                "quantite" : 1
            } ,
            {
                "ingredient" : "Citron vert" ,
                "quantite" : 5
            } ,
            {
                "ingredient" : "Lait de Coco" ,
                "quantite" : 100 ,
                "unite" : "ml"
            }
        ] ,
        "temps" : 60 ,
        "description" : "Découper le thon en dés, mettre dans un plat et recouvrir de jus de citron vert (mieux vaut prendre un plat large et peu profond). Laisser reposer au réfrigérateur au moins 2 heures. (Si possible faites-le le soir pour le lendemain. Après avoir laissé mariner le poisson, couper le concombre en fines rondelles sans la peau et les tomates en prenant soin de retirer les pépins. Rayer la carotte. Ajouter les légumes au poissons avec le citron cette fois ci dans un Saladier Pour ajouter un peu plus de saveur vous pouver ajouter 1 à 2 cuillères à soupe de Crème de coco" ,
        "appareil" : "Saladier" ,
        "ustensiles" : [ "presse citron" ]
    } , {
        "identifiant" : 3 ,
        "nom" : "Poulet coco réunionnais" ,
        "portions" : 4 ,
        "ingredients" : [
            {
                "ingredient" : "Poulet" ,
                "quantite" : 1          
            } ,
            {
                "ingredient" : "Lait de coco" ,
                "quantite" : 400 ,
                "unite" : "ml"
            } ,
            {
                "ingredient" : "Coulis de tomate" ,
                "quantite" : 25 ,
                "unite" : "cl"
            } ,
            {
                "ingredient" : "Oignon" ,
                "quantite" : 1
            } ,
            {
                "ingredient" : "Poivron rouge" ,
                "quantite" : 1
            } ,
            {
                "ingredient" : "Huile d'olive"
            }
        ] ,
        "temps" : 80 ,
        "description" : "Découper le poulet en morceaux, les faire dorer dans une cocotte avec de l'huile d'olive. Salez et poivrez. Une fois doré, laisser cuire en ajoutant de l'eau. Au bout de 30 minutes, ajouter le coulis de tomate, le lait de coco ainsi que le poivron et l'oignon découpés en morceaux. Laisser cuisiner 30 minutes de plus. Servir avec du riz" ,
        "electromenager" : "Cocotte" ,
        "ustensiles" : [ "couteau" ]
    } , {
        "identifiant" : 4 ,
        "nom" : "Salade de riz" ,
        "portions" : 4 ,
        "ingredients" : [
            {
                "ingredient" : "Riz blanc" ,
                "quantite" : 500 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Thon en miettes" ,
                "quantite" : 200 ,
                "unite" : "grammes"
            } , {
                "ingredient" : "Tomate" ,
                "quantite" : 2
            } ,
            {
                "ingredient" : "Oeuf dur" ,
                "quantite" : 2
            } ,
            {
                "ingredient" : "Maïs" ,
                "quantite" : 300 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Vinaigrette" ,
                "quantite" : 5 ,
                "unite" : "cl"
            }
        ] ,
        "temps" : 50 ,
        "description" : "Faire cuire le riz. Une fois le riz cuit, le laisser refroidir. Couper les œufs en quarts ou en lamelle au choix, couperez le tomates en dés, ajouter au riz les œufs, les tomates, le poisson, le maïs et la vinaigrette. Ajouter au gout de chacun des corniches, olives etc.." ,
        "appareil" : "Cuiseur de riz" ,
        "ustensiles" : [ "saladier" ,  "passoire" ]
    } ,
    {
        "identifiant" : 5 ,
        "nom" : "Tarte au thon" ,
        "portions" : 4 ,
        "ingredients" : [
           {
               "ingredient" : "Pâte feuilletée" ,
               "quantite" : 1 
           } ,
           {
               "ingredient" : "Thon en miettes" ,
               "quantite" : 130 ,
               "unite" : "grammes"
           } ,
           {
                "ingredient" : "Tomate" ,
                "quantite" : 2
           } ,
           {
               "ingredient" : "Crème fraîche" ,
               "quantite" : 2 ,
               "unite" : "cuillères à soupe"
           } ,
           {
               "ingredient" : "gruyère râpé" ,
               "quantite" : 100 ,
               "unite" : "grammes"
           } ,
           {
                "ingredient" : "Moutarde de Dijon" ,
                "quantite" : 1 ,
                "unite" : "cuillères à soupe"
           }
        ] ,
        "temps" : 45 ,
        "description" : "Etaler la pâte feuilleté aux dimensions du moule, étaler la moutarde sur la pâte feuilleté, ajouter le thon. Découper les tomates en rondelles et les poser sur le poisson, ajouter un peu de crème fraiche sur toute la tarte et recouvrez de gruyère râpé. Cuire au four 30 minutes" ,
        "appareil" : "Quatre" ,
        "ustensiles" : [ "moule à tarte" ,  "râpe à fromage" ,  "couteau" ]
    } ,
    {
        "identifiant" : 6 ,
        "nom" : "Tarte aux pommes" ,
        "portions" : 6 ,
        "ingredients" : [
            {
                "ingredient" : "Pâte brisée" ,
                "quantite" : 1
            } ,
            {
                "ingredient" : "Pomme" ,
                "quantite" : 3
            } ,
            {
                "ingredient" : "Oeuf" ,
                "quantite" : "2"
            } ,
            {
                "ingredient" : "Crème fraîche" ,
                "quantite" : 25 ,
                "unite" : "cl"
            } ,
            {
                "ingredient" : "Sucre en Poudre" ,
                "quantite" : 100 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Sucre vanillé" ,
                "quantite" : 1 ,
                "unite" : "sachets"

            }
        ] ,
        "temps" : 50 ,
        "description" : "Commencez par mélanger les œufs le sucre et le sucre vanillé dans un saladier, découper les pommes en tranches, ajouter la crème fraîche aux œufs. Une fois que tout est prêt, étalez la tarte dans le moule. N'oubliez pas pas de piquer le fond avec une fourchette avant depositionner les pommes sur la tarte. Finallement verser la préparation à base d'oeufs et de crême fraiche. Laisser cuire au four pendant 30 minutes" ,
        "appareil" : "Quatre" ,
        "ustensiles" : [ "moule à tarte" ,  "saladier" ,  "fourchette" ]
    } , {
        "identifiant" : 7 ,
        "nom" : "Tartelettes au chocolat et aux fraises" ,
        "portions" : 6 ,
        "ingredients" : [
            {
                "ingredient" : "Pâte sablée" ,
                "quantite" : 1
            } , 
            {
                "ingredient" : "Chocolat au lait" ,
                "quantite" : 300 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Crème liquide" ,
                "quantite" : 80 ,
                "unite" : "cl"
            } ,
            {
                "ingredient" : "Beurre" ,
                "quantite" : "30" ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Fraise" ,
                "quantite" : 6
            }
        ] ,
        "temps" : 50 ,
        "description" : "Etaler la pate dans les moules à tartelette. Faire cuire la pate 30 minutes. Découper le chocolat en morceau et le faire chauffer, y ajouter la crème liquide, ajouter le beurre et remuer jusqu'à avoir une pâte homogène. Verser la pate sur les tartelettes. Couper les fraises en 2 et les positionner sur " ,
        "appareil" : "Quatre" ,
        "ustensiles" : [ "moule à tartelettes (6)" ,  "casserolle" ]
    } ,  {
        "identifiant" : 8 ,
        "nom" : "Brownie" ,
        "portions" : 10 ,
        "ingredients" : [
           {
                "ingredient" : "Noix" ,
                "quantite" : "180" ,
                "unite" : "grammes"
           } ,
           {
               "ingredient" : "Chocolat noir" ,
               "quantite" : 150 ,
               "unite" : "grammes"
           } ,
           {
               "ingredient" : "Beurre" ,
               "quantite" : 120 ,
               "unite" : "grammes"
           } ,
           {
                "ingredient" : "Oeuf" ,
                "quantite" : 2
           } ,
           {
               "ingredient" : "Sucre en Poudre" ,
               "quantite" : "110" ,
               "unite" : "grammes"
           } ,
           {
                "ingredient" : "farine" ,
                "quantite" : 90 ,
                "unite" : "grammes"
           }

        ] , 
        "temps" : 60 ,
        "description" : "Hachez les noix grossièrement. Faire fondre le chocolat avec le beurre. Mélanger les oeuf et le sucre et mélanger au chocolat. Ajouter la farine. Mélanger afin d'avoir choisi d'homogène puis incorporer les noix. Verser la Préparation dans une moule de préférence rectangulaire. Cuire 2O à 25 minutes à 180°. Sortez de quatre et quelques minutes pour démouler. Servir avec une boule de glace pour plus de gourmandise." ,
        "appareil" : "Quatre" ,
        "ustensiles" : [ "moule à gateaux" ,  "casserolle" ]
    } ,
    {
        "identifiant" : 9 ,
        "nom" : "Salade Méditerannéene fraiche au chèvre" ,
        "portions" : 4 ,
        "ingredients" : [
            {
                "ingredient" : "Concombre" ,
                "quantite" : 1
            } ,
            {
                "ingredient" : "Olives"
            } ,
            {
                "ingredient" : "Fromage de chèvre" ,
                "quantite" : 150 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Vinaigre Balsamique"
            } ,
            {
                "ingredient" : "Huile d'olive"
            } , 
            {
                "ingredient" : "Basilique"    
            }
        ] ,
        "temps" : 15 ,
        "description" : "Peler le concombre le couper 2, retirer les pépins. Couper les olives en morceaux, ainsi que le fromage de chèvre. Ajouter le basilic ainsi que le vinaigre balsamic et l'huile d'olives à votre gout." ,
        "appareil" : "Saladier" ,
        "ustensiles" : [ "cuillère en bois" ,  "couteau" ]
    } ,
    {
        "identifiant" : 10 ,
        "nom" : "Tartiflette" ,
        "portions" : 4 ,
        "ingredients" : [
            {
                "ingredient" : "Roblochon" ,
                "quantite" : "1"
            } ,
            {
                "ingredient" : "Pommes de terre" ,
                "quantite" : 4.5 ,
                "unite" : "kg"
            } ,
            {
                "ingredient" : "Jambon fumé" ,
                "quantite" : 2 ,
                "unite" : "tranches"
            } ,
            {
                "ingredient" : "Oignon" ,
                "quantite" : 300 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Vin blanc sec" ,
                "quantite" : 30 ,
                "unite" : "cl"
            }
        ] ,
        "temps" : 60 ,
        "description" : "Commencer par cuire les pommes de terre dans l'eau bouillante. Puis epluchez les et couperez les rondelles. Emincer les oignons puis les faire dorer dans du beurre. Ajouter le jambon fumé coupé en morceaux ainsi que les pommes Salez, poivrez à votre gout ( et celui de vos convives ) Laissez cuisiner durant environ 10 minutes puis ajouter le vin blanc. Après 5 minutes, mettre le tout dans un plat à gratin. Coupez le rebelochon, soit en tranches, soit le couper en 2 dans le sens de l'épaisseur et recouvrir les pommes de terre. Cuire au four (environ 220°) durant 25 minutes. C'est prêt !" ,
        "appareil" : "Quatre" ,
        "ustensiles" : [ "plat à gratin" ,  "couteau" , "Économe" ]
    } , {
        "identifiant" : 11 ,
        "nom" : "Salade tomate, mozzarella et pommes" ,
        "portions" : 4 ,
        "ingredients" : [
            {
                "ingredient" : "Tomates cerises" ,
                "quantite" : 250 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Mozzarella" ,
                "quantite" : 150 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Jambon de parme" ,
                "quantite" : 4 ,
                "unite" : "tranches"
            } , 
            {
                "ingredient" : "Pommes" ,
                "quantite" : 1
            } ,
            {
                "ingredient" : "Salade Verte" ,
                "quantite" : 1
            } ,
            {
                "ingredient" : "Vinaigrette" ,
                "quantite" : 5 ,
                "unite" : "cl"
            }
        ] ,
        "temps" : 10 ,
        "description" : "Commencer par couper les feuilles de salade, ajouter les tomates cerises et le fromage découpé en cubes ou en boules avec la cuillère à melon. Découper le jambon de parme en fines lamelles. . Assaisonnez à votre goutte. " ,
        "appareil" : "Saladier" ,
        "ustensiles" : [ "couteau" ,  "cuillère à melon"  ]
    } , {
        "identifiant" : 12 ,
        "nom" : "Compote pomme rhubarbe" ,
        "portions" : 4 ,
        "ingredients" : [
            {
                "ingredient" : "Rhubarbe" ,
                "quantite" : 160 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Pommes" ,
                "quantite" : 8
            } ,
            {
                "ingredient" : "Sucre vanillé" ,
                "quantite" : 6 ,
                "unite" : "sachets"
            } ,
            {
                "ingredient" : "Eau" ,
                "quantite" : "0,5" ,
                "unit" : "tasses"
            }
        ] ,
        "temps" : 40 ,
        "description" : "Éplucher les fruits et les couper en morceaux, les mettre dans une casserolle en ajoutant l'eau et le sucre vanillé. Laisser cuire 15 minutes en remuant régulièrement." ,
        "appareil" : "Casserole" ,
        "ustensiles" : [ "couteau" ,  "économe" ]
    } ,
    {
        "identifiant" : 13 ,
        "nom" : "Salade mâchée de patates" ,
        "portions" : 2 ,
        "ingredients" : [
            {
                "ingredient" : "Mâche" ,
                "quantite" : 60 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Pommes de terre" ,
                "quantite" : 200 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Échalote" ,
                "quantite" : 2

            } ,
            {
                "ingredient" : "Vinaigre de cidre" ,
                "quantite" : 1 ,
                "unit" : "cuillère à soupe"
            } ,
            {
                "ingredient" : "huile d'olive" ,
                "quantite" : 2 ,
                "unit" : "cuillère à soupe"
            }
        ] ,
        "temps" : 40 ,
        "description" : "Cuire les pommes de terre environ 30 minutes. Découper les échalottes finement. Durant la cuisson des pommes de terre. Préparez la vinaigrette avec l'huile d'olive et le vinaigre de cidre. Salez poivrez à discrétion. Dans un Saladier, le Mâche Mettre. Ajouter",
        "appareil" : "Casserole" ,
        "ustensiles" : [ "couteau" , "saladier" , "cuillère en bois" ]
    } ,
    {
        "identifiant" : 14 ,
        "nom" : "Galette Bretonne Saucisse et Fromage à raclette" ,
        "portions" : 2 ,
        "ingredients" : [
            {
                "ingredient" : "Saucisse bretonne ou de toulouse" ,
                "quantite" : 2
            } ,
            {
                "ingredient" : "Farine de blé noir" ,
                "quantite" : 130 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Oeuf" ,
                "quantite" : 1

            } ,
            {
                "ingredient" : "Fromage à raclette" ,
                "quantite" : 300 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Oignon" ,
                "quantite" : 1
            } ,
            {
                "ingredient" : "Beurre" ,
                "quantite" : 75 ,
                "unite" : "grammes"
            }

        ] ,
        "temps" : 100 ,
        "description" : "Mélanger la farine et les œufs, faire fondre 25 grammes de beurre et ajouter à la pâte. Ajouter du sel. Laisser reposer 1 heure. Faire les galettes et laisser refroidir. Faire chauffer les saucisses avec du beurre et l' oignon. Enrouler les saucisses dans les crêpes avec une partie du fromage. Mettre le reste du fromage à raclette par dessus les crêpes. Passer four pendant 20 minutes" ,
        "appareil" : "Quatre" ,
        "ustensiles" : [ "poelle à frire" , "couteau" ]
    } ,
    {
        "identifiant" : 15 ,
        "nom" : "Crêpes Chocolat Banane" ,
        "portions" : 10 ,
        "ingredients" : [
            {
                "ingredient" : "Oeuf" ,
                "quantite" : 3
            } ,
            {
                "ingredient" : "Farine" ,
                "quantite" : 250 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Lait" ,
                "quantite" : 600 ,
                "unite" : "ml"
            } ,
            {
                "ingredient" : "Beurre salé" ,
                "quantite" : 30 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Chocolat au lait" ,
                "quantite" : 100 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Banane" ,
                "quantite" : 4
            }
        ] ,
        "temps" : 60 ,
        "description" : "Mélangez dans un saladier, la farine, les oeufs, et le lait. Battez jusqu'à avoir une masse homogène. Pendant ce temps faites fondre le beurre et ajoutez en une partie à la pâte à crêpes. Faire fondre le beurre chocolat (avec le reste du beurre salé ). Lorsque vous chauffez les crêpes. Ajouter le chocolat fondu et les bananes coupées en rondelles. Ajoutez une touche de chantilly pour les gourmands" ,
        "appareil" : "Poële à crêpe" ,
        "ustensiles" : [ "saladier" ,  "louche" ,  "cuillère en bois" ]
    } ,
    {
        "identifiant" : 16 ,
        "nom" : "Gratin de pâtes à la tomate" ,
        "portions" : 2 ,
        "ingredients" : [
            {
                "ingredient" : "Tomate" ,
                "quantite" : 500 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Mozzarella" ,
                "quantite" : 250 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Pennes" ,
                "quantite" : 500 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Basilique" ,
                "quantite" : 1 ,
                "unite" : "tiges"
            } ,
            {
                "ingredient" : "huile d'olive" ,
                "quantite" : 2 ,
                "unit" : "cuillère à soupe"
            }
        ] ,
        "temps" : 45 ,
        "description" : "Faire cuire les pâtes si vous n'avez pas de pennes des coquillettes peuvent faire l'affaire. Découper les tomates en petits morceaux, soit en tranches soit en dés. Coupez le basilic en petits morceaux et mélangez le aux tomates Coupez la mozzarella en tranche. Préchauffez le four à 200°. Alternez entre canapés de pattes et canapés de tomates, terminez par une couche de pâtes et recouvrir du fromage. Laisser au four 30 minutes et régalez vous ! Une recette simple qui fera plaisir au petits comme aux grands." ,
        "appareil" : "Quatre" ,
        "ustensiles" : [ "plat à gratin" ,  "couteau" ,  "râpe à fromage" ]
    } ,
    {
        "identifiant" : 17 ,
        "nom" : "Smoothie à la fraise" ,
        "portions" : 6 ,
        "ingredients" : [
            {
                "ingredient" : "Fraise" ,
                "quantite" : 500 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Pastèque" ,
                "quantite" : 0.5
            } ,
            {
                "ingredient" : "Jus de citron" ,
                "quantite" : 1 ,
                "unite" : "cuillères à soupe"
            } ,
            {
                "ingredient" : "Glaçons" ,
                "quantite" : 8
            } ,
            {
                "ingredient" : "Menthe"
            }
        ] ,
        "temps" : 15 ,
        "description" : "Coupez les fraises en morceaux, découpez la chaire de la pastèque en retirant les pépins. Mettre le tout dans le blender. de fraicheur. Mixez le tout. Servir et déguster." ,
        "appareil" : "Mixeur" ,
        "ustensiles" : [ "verres" ,  "couteau" ,  "presse citron" ]
    } ,
    {
        "identifiant" : 18 ,
        "nom" : "Smoothie ananas et vanille" ,
        "portions" : 5 ,
        "ingredients" : [
            {
                "ingredient" : "Ananas" ,
                "quantite" : 1
            } ,
            {
                "ingredient" : "Glace à la vanille" ,
                "quantite" : 500 ,
                "unite" : "ml"
            } ,
            {
                "ingredient" : "Lait" ,
                "quantite" : 50 ,
                "unite" : "cl"
            }
        ] ,
        "temps" : 10 ,
        "description" : "Séparez 1/5ème d'Ananas ( une belle tranche qui servira pour la décoration des verres ), mettre le reste coupé en cubes au blender, ajouter la glace à la vanille et le lait. Mixez. Servir et décorer avec l'ananas restant. C'est prêt" ,
        "appareil" : "Mixeur" ,
        "ustensiles" : [ "verres" ,  "couteau" ]
    } ,
    {
        "identifiant" : 19 ,
        "nom" : "Shake Banane Kiwi" ,
        "portions" : 4 ,
        "ingredients" : [
            {
                "ingredient" : "Kiwi" ,
                "quantite" : 4
            } ,
            {
                "ingredient" : "Citron" ,
                "quantite" : 1
            } ,
            {
                "ingredient" : "Lait" ,
                "quantite" : 1 ,
                "unite" : "litres"
            } ,
            {
                "ingredient" : "Sucre glace" ,
                "quantite" : 30 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Banane" ,
                "quantite" : 1
            }
        ] ,
        "temps" : 0 ,
        "description" : "Couper les fruits en morceaux, ajouter le jus de citron et le lait ainsi que le sucre glace. Mixez. Ajoutez des glaçons si le lait n'a pas été mis au frais." ,
        "appareil" : "Mixeur" ,
        "ustensiles" : [ "couteau" ,  "verres" ,  "presse citron" ]
    } ,
    {
        "identifiant" : 20 ,
        "nom" : "Pâtes Carbonara" ,
        "portions" : 5 ,
        "ingredients" : [
            {
                "ingredient" : "Tagliatelles" ,
                "quantite" : 500 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Lardons" ,
                "quantite" : 150 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Crème fraîche" ,
                "quantite" : 200 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Parmesan" ,
                "quantite" : 100 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "huile d'olive" ,
                "quantite" : 1 ,
                "unite" : "cuillères à soupe"
            }
        ] ,
        "temps" : 30 ,
        "description" : "Faire cuire les pâtes comme indiqué sur le paquet. Dorer les lardons dans une sauteuse avec l'huile d'olive. Ajouter la crème fraîche et baisser le feu au minimum. Quand les Tagliatelles sont prêtes les mettre dans la sauteuse et bien mélanger le tout en ajoutant le jaune d'oeuf. Servir et ajouter le parmesan râpé." ,
        "appareil" : "Sauteuse" ,
        "ustensiles" : [ "râpe à fromage" ,  "cuillère en bois" ]
    } ,
    {
        "identifiant" : 21 ,
        "nom" : "Spaghettis à la bolognaise" ,
        "portions" : 4 ,
        "ingredients" : [
            {
                "ingredient" : "Spaghettis" ,
                "quantite" : 400 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Oignon" ,
                "quantite" : 2
            } ,
            {
                "ingredient" : "Coulis de tomate" ,
                "quantite" : 300 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Viande hachée 1% de matière grasse" ,
                "quantite" : 400 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Vin rouge" ,
                "quantite" : 20 ,
                "unite" : "cl"
            } ,
            {
                "ingredient" : "Crème Fraiche" ,
                "quantite" : 1 ,
                "unite" : "cuillères à soupe"
            }
        ] ,
        "temps" : 30 ,
        "description" : "Cuisiner la viande hachée dans une poelle à frire. Dans une autre faire cuire les oignons découpés en fins dés avec un peu de beurre. Ajouter du vin rouge. Mélanger les oigons avec la viande hachée. Faire cuire les pates le temps indiqué sur le paquet. Ajouter le coulis de tomates à la viande hachée. Une fois que les pâtes sont cuites, ajouter la crème fraîche à la viande hachée. Serivir." ,
        "electromenager" : "Casserolle." ,
        "ustensiles" : [ "Cuillère en bois" ,  "louche" ,  "couteau" ]
    } ,
    {
        "identifiant" : 22 ,
        "nom" : "Fondant au chocolat" ,
        "portions" : 4 ,
        "ingredients" : [
            {
                "ingredient" : "Beurre" ,
                "quantite" : 160 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Chocolat noir" ,
                "quantite" : 200 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Farine" ,
                "quantite" : 50 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Oeuf" ,
                "quantite" : 4
            } ,
            {
                "ingredient" : "Sucre" ,
                "quantite" : 150 ,
                "unite" : "grammes"
            }
        ] ,
        "temps" : 30 ,
        "description" : "Faire fondre le chocolat et le beurre au bain marie. Dans un saladier battre les oeufs avec le sucre jusqu'à obtenir une texture de type mousse. Ajouter la farine ainsi que le mélange de beurre et chocolat fondu. Beurrez le moule à gâteaux. Mettre au four préchauffé à 200° puis faites chauffer pendant 15 minutes. C'est prêt. Servir avec une boule de glace ou une crème dessert." ,
        "appareil" : "Quatre" ,
        "ustensiles" : [ "moule à gateaux" ,  "fouet" ,  "casserolle" ]
    } ,
    {
        "identifiant" : 23 ,
        "nom" : "Quiche lorraine" ,
        "portions" : 4 ,
        "ingredients" : [
            {
                "ingredient" : "Pâte brisée" ,
                "quantite" : 200 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Lardons" ,
                "quantite" : 200 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Beurre" ,
                "quantite" : 30 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Oeuf" ,
                "quantite" : 3
            } ,
            {
                "ingredient" : "Crème Fraîche" ,
                "quantite" : 20 ,
                "unite" : "cl"
            } ,
            {
                "ingredient" : "Lait" ,
                "quantite" : 20 ,
                "unite" : "cl"
            }
        ] ,
        "temps" : 60 ,
        "description" : "Etaler la pate dans un moule et la piquer.Parsemer de beurre. Faire chauffer les lardon dans une poêle. Battre les oeufs en ajoutant la crème fraîche et le lait. Finalement ajouter les lardons, salez poivrez à votre gout. Verser l'ensemble sur la pâte. Cuire environ 50 minutes." ,
        "appareil" : "Quatre" ,
        "ustensiles" : [ "moule à gateaux" ,  "rouleau à patisserie" ,  "fouet" ]
    } ,
    {
        "identifiant" : 24 ,
        "nom" : "Salade de pâtes" ,
        "portions" : 4 ,
        "ingredients" : [
            {
                "ingredient" : "Thon en miettes" ,
                "quantite" : 160 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Maïs" ,
                "quantite" : 60 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Tomate" ,
                "quantite" : 1
            } ,
            {
                "ingredient" : "Concombre" ,
                "quantite" : 0.5
            } ,
            {
                "ingredient" : "Macaronis" ,
                "quantite" : 300 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Mayonnaise" ,
                "quantite" : 2 ,
                "unite" : "cuillères à soupe"
            }
        ] ,
        "temps" : 40 ,
        "description" : "Découper le concombre et les tomates en dés, les mettre dans un saladier avec le mais et les miettes de poisson, ajouter les pates. Ajouter la mayonnaise. Mélanger le tout et servir frais." ,
        "appareil" : "Saladier" ,
        "ustensiles" : [ "couteau" ,  "cuillère en bois" ]
    } ,
    {
        "identifiant" : 25 ,
        "nom" : "Cookies" ,
        "portions" : 4 ,
        "ingredients" : [
            {
                "ingredient" : "Sucre" ,
                "quantite" : 100 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Beurre" ,
                "quantite" : 100 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Farine" ,
                "quantite" : 100 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Chocolat noir en pepites" ,
                "quantite" : 100 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Oeuf" ,
                "quantite" : 1
            }
        ] ,
        "temps" : 30 ,
        "description" : "Faire fondre le beurre et le mélange avec le sucre. Finalement ajouter l'oeuf. Ajouter la farine tout en mélangeant peu pa peu pour avoir une masse sans grumaux. Ajouter les pépites de chocolat. Faire, une plaque de cuisson de petites boules pour les cookies. Mettre au four à 180° pour 10 minutes." ,
        "appareil" : "Quatre" ,
        "ustensiles" : [ "fouet" ,  "saladier" ,  "plaque de cuisson" ]
    } ,
    {
        "identifiant" : 26 ,
        "nom" : "Soupe de tomates" ,
        "portions" : 2 ,
        "ingredients" : [
            {
                "ingredient" : "Tomate" ,
                "quantite" : 6
            } ,
            {
                "ingredient" : "Pommes de terre" ,
                "quantite" : 1
            } ,
            {
                "ingredient" : "Huile d'olives"
            } ,
            {
                "ingredient" : "Oignon" ,
                "quantite" : 1
            } ,
            {
                "ingredient" : "Ail" ,
                "quantite" : 1 ,
                "unite" : "gousses"
            }
        ] ,
        "temps" : 25 ,
        "description" : "Verser de l'huile dans une cocotte minute couper les légumes et les verser dans l'huile chaude. Laisser cuire et remuer pendant 10 minutes. Passer aux mixer. Servir." ,
        "appareil" : "Mélangeur" ,
        "ustensiles" : [ "cocotte minute" ,  "couteau" ]
    } ,
    {
        "identifiant" : 27 ,
        "nom" : "Soupe à l'oseille" ,
        "portions" : 4 ,
        "ingredients" : [
            {
                "ingredient" : "Oseille" ,
                "quantite" : 2
            } ,
            {
                "ingredient" : "Oeuf" ,
                "quantite" : 1
            } ,
            {
                "ingredient" : "Crème fraîche" ,
                "quantite" : 4 ,
                "unit" : "cuillère à soupe"
            } ,
            {
                "ingredient" : "Vermicelles" ,
                "quantite" : 1 ,
                "unite" : "verres"
            } ,
            {
                "ingredient" : "Beurre salé" ,
                "quantite" : 50 ,
                "unite" : "grammes"
            }
        ] ,
        "temps" : 15 ,
        "description" : "Faire fondre l'oseille avec du beurre demi sel, ajouter un litre d'eau. Ajouter les vermicelles. Laisser cuire. une foit prêt, sortir du feu et après 5 minutes ajouter le jaune d'oeuf et la crème frais" ,
        "electromenager" : "Casserolle" ,
        "ustensiles" : [ "couteau" , "cuillère en bois" ]
    } ,
    {
        "identifiant" : 28 ,
        "nom" : "Soupe de poireaux" ,
        "portions" : 4 ,
        "ingredients" : [
            {
                "ingredient" : "Poireau" ,
                "quantite" : 3
            } ,
            {
                "ingredient" : "Pommes de terre" ,
                "quantite" : 400 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Oseille" ,
                "quantite" : 75 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Beurre" ,
                "quantite" : 50 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Crème fraîche" ,
                "quantite" : 10 ,
                "unite" : "cl"
            }
        ] ,
        "temps" : 80 ,
        "description" : "Emincer les blancs de poireaux et les faire chauffer dans 25 grammes de beurre. AJouter les pommes de terres coupées en morceaux. Ajouter l'eau et laisser mijoter pour 45 minutes. Chauffer l'oseille avec le beurre puis incorporer restant le tout. Mixez. Ajoutez la crème. Bon appétit." ,
        "appareil" : "Mélangeur" ,
        "ustensiles" : [ "casserolle" , "couteau" ]
    } ,
    {
        "identifiant" : 29 ,
        "nom" : "Houmous Express" ,
        "portions" : 2 ,
        "ingredients" : [
            {
                "ingredient" : "Pois chiches" ,
                "quantite" : 1 ,
                "unit" : "boites"
            } ,
            {
                "ingredient" : "Ail" ,
                "quantite" : 1 ,
                "unite" : "gousses"
            } ,
            {
                "ingredient" : "Citron" ,
                "quantite" : 2
            } ,
            {
                "ingredient" : "Huile d'olive"
            } ,
            {
                "ingredient" : "Paprika"
            }
        ] ,
        "temps" : 30 ,
        "description" : "Prendre les pois chicches, les mettre dans le mixer avec de l'huile d'olive, ajouter le jus des 2 citrons et du paprika selon le gout." ,
        "appareil" : "Mélangeur" ,
        "ustensiles" : [ "cuillère en bois" ,  "presse citron" ]
    } ,
    {
        "identifiant" : 30 ,
        "nom" : "Purée de pois cassés" ,
        "portions" : 4 ,
        "ingredients" : [
            {
                "ingredient" : "Pois Cassé" ,
                "quantite" : 500 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Oignon" ,
                "quantite" : 1
            } ,
            {
                "ingredient" : "Ail" ,
                "quantite" : 2 ,
                "unite" : "gousses"
            }
        ] ,
        "temps" : 60 ,
        "description" : "Mettre tous les ingrédients dans une cocotte. ajouter de l'eau pour recouvrir l'ensemble et laisser cuirre à petit feu pour 1 heure. Passer au mixer. Salez, poivrez. C'est prêt" ,
        "appareil" : "Mélangeur" ,
        "ustensiles" : [ "casserolle" ,  "cuillère en bois" ]
    } ,
    {
        "identifiant" : 31 ,
        "nom" : "Jardinière de légumes" ,
        "portions" : 4 ,
        "ingredients" : [
            {
                "ingredient" : "Carotte" ,
                "quantite" : 2
            } ,
            {
                "ingredient" : "Pommes de terre" ,
                "quantite" : 2
            } ,
            {
                "ingredient" : "Haricots verts" ,
                "quantite" : 150 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Petits poids" ,
                "quantite" : 100 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Lardons" ,
                "quantite" : 150 ,
                "unite" : "grammes"
            }
        ] ,
        "temps" : 60 ,
        "description" : "Découper en cubes les carottes et pommes de terre. Faire revenir dans du beurre. Ajouter les lardons, une fois les lardons dorés, ajouter un grand verre d'eau. Ajouter les petit poids et les haricots verts ( tous deux pré cuits ). Ajouter Sel, poivre, thyms et laurier" ,
        "electromenager" : "Poële" ,
        "ustensiles" : [ "Couteau" ,  "économe" ]
    } ,
    {
        "identifiant" : 32 ,
        "nom" : "Croque Monsieur à la dinde" ,
        "portions" : 4 ,
        "ingredients" : [
            {
                "ingredient" : "Pain de mie" ,
                "quantite" : 8 ,
                "unite" : "tranches"
            } ,
            {
                "ingredient" : "Blanc de dinde" ,
                "quantite" : 4 ,
                "unite" : "tranches"
            } ,
            {
                "ingredient" : "Emmental" ,
                "quantite" : 8 ,
                "unite" : "tranches"
            } ,
            {
                "ingredient" : "Gruyère" ,
                "quantite" : 100 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Lait" ,
                "quantite" : 5 ,
                "unite" : "cl"
            } ,
            {
                "ingredient" : "Noix de muscade" ,
                "quantite" : 1 ,
                "unite" : "pincées"
            }
        ] ,
        "temps" : 20 ,
        "description" : "Beurrer les tranches de pain, ajouter entre 2 tranches de pain de mie 1 tranche d'émental, une de blanc de dinde, et une autre d'emmental. Dans un récepteur, mélanger le gruyère rappé avec le lait et la noix de muscade. Mettre sur les croque monsieux. Placer au four durnat 10 minutes." ,
        "appareil" : "Quatre" ,
        "ustensiles" : [ "râpe à fromage" ,  "cuillère à soupe" ,  "couteau" ]
    } ,
    {
        "identifiant" : 33 ,
        "nom" : "Sandwich au saumon fumé" ,
        "portions" : 4 ,
        "ingredients" : [
            {
                "ingredient" : "Pain de mie" ,
                "quantite" : 8 ,
                "unite" : "tranches"
            } ,
            {
                "ingredient" : "Saumon Fumé" ,
                "quantite" : 4 ,
                "unite" : "tranches"
            } ,
            {
                "ingredient" : "Feuilles de laitue" ,
                "quantite" : 4
            } ,
            {
                "ingredient" : "Fromage blanc" ,
                "quantite" : 4 ,
                "unite" : "cuillères à soupe"
            } ,
            {
                "ingredient" : "Jus de citron" ,
                "quantite" : 1 ,
                "unite" : "cuillères à soupe"
            }
        ] ,
        "temps" : 5 ,
        "description" : "Mélanger le fromage blanc avec le citron. Ajouter un peu de sel et poivre à votre goutte. Faire dorer le pain de mie. Puis étaler le mélange. Ajouter une feuille de salade puis le saumon fumé. C'est prêt ." ,
        "appareil" : "Quatre" ,
        "ustensiles" : [ "couteau" ,  "cuillère en bois" ]
    } ,
    {
        "identifiant" : 34 ,
        "nom" : "Purée de patate douce" ,
        "portions" : 4 ,
        "ingredients" : [
            {
                "ingredient" : "Patate douce" ,
                "quantite" : 800 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Crème fraîche" ,
                "quantite" : 20 ,
                "unite" : "cl"
            } ,
            {
                "ingredient" : "Huile d'olive"
            } ,
            {
                "ingredient" : "Orange" ,
                "quantite" : 1
            }
        ] ,
        "temps" : 25 ,
        "description" : "Eplucher les patates douces et couper les en morceaux. Les faire cuire durant 20 minute dans une casserolle d'eau bouillante. Passer au mixer en ajoutant la crème et l'huile d'olive à son gout. Salez, poivrez . Pressez l'orange et ajoutez le jus à l'ensemble. Servir." ,
        "appareil" : "Mélangeur" ,
        "ustensiles" : [ "couteau" ,  "économe" ,  "cuillère en bois" ]
    } ,
    {
        "identifiant" : 35 ,
        "nom" : "Purée de carottes" ,
        "portions" : 2 ,
        "ingredients" : [
            {
                "ingredient" : "Carotte" ,
                "quantite" : 6
            } ,
            {
                "ingredient" : "Pommes de terre" ,
                "quantite" : 1
            } ,
            {
                "ingredient" : "Beurre" ,
                "quantite" : 20 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Crème fraîche" ,
                "quantite" : 2 ,
                "unite" : "cuillères à soupe"
            } ,
            {
                "ingredient" : "Cumin" ,
                "quantite" : 1 ,
                "unite" : "cuillères à café"
            } ,
            {
                "ingredient" : "Noix de muscade" ,
                "quantite" : 1 ,
                "unite" : "pincées"
            }
        ] ,
        "temps" : 25 ,
        "description" : "Éplucher les légumes, les couper en morceaux et les mettre à cuire dans une cocotte minute environ 15 minutes. Mixer en ajoutant le beurre, la crème. Ajouter le cumun et la noix de muscade." ,
        "appareil" : "Mélangeur" ,
        "ustensiles" : [ "cocotte minute" ,  "couteau" ,  "cuillère en bois" ]
    } ,
    {
        "identifiant" : 36 ,
        "nom" : "Lasagne Courgettes et Chèvre" ,
        "portions" : 2 ,
        "ingredients" : [
            {
                "ingredient" : "courgette" ,
                "quantite" : 2
            } ,
            {
                "ingredient" : "Fromage de chèvre" ,
                "quantite" : 4
            } ,
            {
                "ingredient" : "Lait" ,
                "quantite" : 25 ,
                "unite" : "cl"
            } ,
            {
                "ingredient" : "Lasagnes" ,
                "quantite" : 5 ,
                "unite" : "feuilles"
            } ,
            {
                "ingredient" : "Gruyère" ,
                "quantite" : 40 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Maïzena" ,
                "quantite" : 1 ,
                "unite" : "cuillères à soupe"
            }
        ] ,
        "temps" : 35 ,
        "description" : "Raper les courgette et les faire revenir durant 15 minutes. Ajouter les fromages de chèvre frais. Préparer la béchamelle avec le lait et la maizena. Salez poivrez, ajouter de la noix de muscade selon les gouts. Dans un plat, mettre un peu de sauces au fond, puis des lasagnes, puis des courgettes etc... terminer par de la sauces et ajouter le gruiyère. Passer au four à 180° durant 20 à 25 minutes." ,
        "appareil" : "Quatre" ,
        "ustensiles" : [ "plat à gratin" ,  "râpe à fromage" ,  "fouet" ]
    } ,
    {
        "identifiant" : 37 ,
        "nom" : "Courgettes farcies au boeuf" ,
        "portions" : 2 ,
        "ingredients" : [
            {
                "ingredient" : "courgette" ,
                "quantite" : 2
            } ,
            {
                "ingredient" : "Viande hachée" ,
                "quantite" : 600 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Huile d'olives" ,
                "quantite" : 25 ,
                "unite" : "cl"
            } ,
            {
                "ingredient" : "Oignon" ,
                "quantite" : 1
            } ,
            {
                "ingredient" : "Coulis de tomates" ,
                "quantite" : 20 ,
                "unite" : "cl"
            } ,
            {
                "ingredient" : "Gruyère" ,
                "quantite" : 50 ,
                "unite" : "grammes"
            }
            
        ] ,
        "temps" : 60 ,
        "description" : "Couper les courgettes dans le sens de la longueur. Vider les courgette dans un saladier. Réserver.Faire revenir la chair des courgettes dans 25cl d'huile d'olive. Ajouter l'oignon puis la viande hachée. Mettre la farce dans les courgettes. Ajouter le coulis de tomates. Mettre au four pendant 30 minutes. Avant la fin de la cuisson ajouter le fromage rapé" ,
        "appareil" : "Quatre" ,
        "ustensiles" : [ "couteau" ,  "cuillère en bois" ,  "Poelle à frire" ]
    } ,
    {
        "identifiant" : 38 ,
        "nom" : "Pain Perdu" ,
        "portions" : 4 ,
        "ingredients" : [
            {
                "ingredient" : "Douleur" ,
                "quantite" : 6 ,
                "unite" : "tranches"
            } ,
            {
                "ingredient" : "Lait" ,
                "quantite" : 25 ,
                "unite" : "cl"
            } ,
            {
                "ingredient" : "Oeuf" ,
                "quantite" : 3
            } ,
            {
                "ingredient" : "Sucre roux" ,
                "quantite" : 75 ,
                "unite" : "grammes"
            }
        ] ,
        "temps" : 20 ,
        "description" : "Fouettez les oeufs, le sucre et le lait. tremper les tranches de pain. Le cuire au four pendant environ 10 minutes à 180°. Servir" ,
        "appareil" : "Quatre" ,
        "ustensiles" : [ "fouet" ,  "bol" , "Cuillère à Soupe" ]
    } ,
    {
        "identifiant" : 39 ,
        "nom" : "Crumble aux pommes" ,
        "portions" : 40 ,
        "ingredients" : [
            {
                "ingredient" : "Pomme" ,
                "quantite" : 2
            } ,
            {
                "ingredient" : "Farine" ,
                "quantite" : 100 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Beurre" ,
                "quantite" : 50 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Sucre roux" ,
                "quantite" : 80 ,
                "unite" : "grammes"
            }
        ] ,
        "temps" : 40 ,
        "description" : "Découper les pommes en dé. Mélanger dans un saladier la farine, le sucre et le beurre. Bien mélanger. Beurrer le moule et ajouter les pommes. Par dessus placez la pate que vous avez obtenu. Cuire 20 minutes au four " ,
        "appareil" : "Quatre" ,
        "ustensiles" : [ "saladier" ,  "couteau" , "fouet" ]
    } ,
    {
        "identifiant" : 40 ,
        "nom" : "Limonade" ,
        "portions" : 4 ,
        "ingredients" : [
            {
                "ingredient" : "Eau" ,
                "quantite" : 1 ,
                "unite" : "Litres"
            } ,
            {
                "ingredient" : "Citron vert" ,
                "quantite" : 3
            } ,
            {
                "ingredient" : "Sucre en poudre" ,
                "quantite" : 4 ,
                "unite" : "cuillères à café"
            } ,
            {
                "ingredient" : "Bicarbonate" ,
                "quantite" : 1 ,
                "unite" : "cuillères à café"
            }
        ] ,
        "temps" : 10 ,
        "description" : "Dans un saladier mettre l'eau, le jus des cirtons et le sucre. Bien mélanger. Ajouter le bicarbonate. Servir. Ajouter des glaçons et une feuille de menthe pour la déco." ,
        "appareil" : "Saladier" ,
        "ustensiles" : [ "cuillère en bois" ]
    } ,
    {
        "identifiant" : 41 ,
        "nom" : "Mousse au chocolat" ,
        "portions" : 4 ,
        "ingredients" : [
            {
                "ingredient" : "Oeuf" ,
                "quantite" : 3
            } ,
            {
                "ingredient" : "Chocolat noir" ,
                "quantite" : 100 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Sucre vanillé" ,
                "quantite" : 1 ,
                "unite" : "sachets"
            }
        ] ,
        "temps" : 20 ,
        "description" : "Séparer les blancs d'oeufs. Faire fondre le chocolat au bain marie. Ajouter les jaunes et le sucre au chocolat hors du feu. Battre les blancs en neige. Ajouter les blancs au mélange de chocolat. Mélangez délicatement avec une spatule. Servir dans un plat ou dans des verres. Mettre au frais" ,
        "electromenager" : "Casserolle" ,
        "ustensiles" : [ "fouet" ,  "spatule" ,  "verres" ]
    } , 
    {
        "identifiant" : 42 ,
        "nom" : "Charlotte aux poires" ,
        "portions" : 3 ,
        "ingredients" : [
            {
                "ingredient" : "Chocolat" ,
                "quantite" : 200 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Oeuf" ,
                "quantite" : 3
            } ,
            {
                "ingredient" : "Poires au jus" ,
                "quantite" : 0.5 ,
                "unit" : "boites"
            } ,
            {
                "ingredient" : "Boudoirs" ,
                "quantite" : 15
            }
        ] ,
        "temps" : 60 ,
        "description" : "Commencez par préparer la mousse au chocolat au moins 2 heures avant. Quand la mousse est prête et a reposée. Alors mouiller les boudoirs dans le jus des poires. Disposer. Alterner : mousse au chocolat, boudoirs et poires. Mettre en au frais." ,
        "electromenager" : "Moule à charlotte" ,
        "ustensiles" : [ "saladier" ,  "couteau" ,  "fouet" ]
    } ,
    {
        "identifiant" : 43 ,
        "nom" : "Tarte au citron" ,
        "portions" : 6 ,
        "ingredients" : [
            {
                "ingredient" : "Pâte brisée" ,
                "quantite" : 200 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Sucre" ,
                "quantite" : 150 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Beurre fondu" ,
                "quantite" : 100 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Oeuf" ,
                "quantite" : 3
            } ,
            {
                "ingredient" : "Citron"
            }
        ] ,
        "temps" : 50 ,
        "description" : "Préchauffez le fours à 200°. Etaler la pate. La mettre dans un moule. Battre les oeufs avec le sucre. Ajouter le jus de citron et le beurre. Verser le tout sur la pate. Au four 30 minutes. Bon appétit" ,
        "appareil" : "Quatre" ,
        "ustensiles" : [ "rouleau à pâtisserie" ,  "moule à tarte" ,  "presse citron" ]
    } , 
    {
        "identifiant" : 44 ,
        "nom" : "Crème dessert au chocolat" ,
        "portions" : 6 ,
        "ingredients" : [
            {
                "ingredient" : "Lait" ,
                "quantite" : 1 ,
                "unite" : "litres"
            } ,
            {
                "ingredient" : "Chocolat" ,
                "quantite" : 200 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Sucre" ,
                "quantite" : 100 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Beurre" ,
                "quantite" : 50 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "farine" ,
                "quantite" : 40 ,
                "unite" : "grammes"
            }
        ] ,
        "temps" : 15 ,
        "description" : "Mélanger la farine et le beurre fondu en ajoutant le lait peu à peu. Ajouter du sucre après la cuisson. Bien mélanger. Ajouter le chocolat en morceaux et laisser chauffer 8 minutes en mélangeant avec une cuillère en bois. Mettre dans des verres" ,
        "electromenager" : "Casserolle" ,
        "ustensiles" : [ "cuillère en bois" ]
    } ,
    {
        "identifiant" : 45 ,
        "nom" : "Crème pâtissière" ,
        "portions" : 8 ,
        "ingredients" : [
            {
                "ingredient" : "Lait" ,
                "quantite" : 50 ,
                "unite" : "cl"
            } ,
            {
                "ingredient" : "Oeuf" ,
                "quantite" : 2
            } ,
            {
                "ingredient" : "Farine" ,
                "quantite" : 30 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Sucre" ,
                "quantite" : 80 ,
                "unite" : "grammes"
            }
        ] ,
        "temps" : 30 ,
        "description" : "Faire bouillir le lait ( on peut y ajouter de l'essence de vanille. Battre les oeufs et le sucre, ajouter la farine puis ajouter le lait chaud. Remettre à feu doux pour faire épaissir en remuant pendant 5 à 10 minutes." ,
        "electromenager" : "Casserolle" ,
        "ustensiles" : [ "fouet" , "saladier" ]
    } ,
    {
        "identifiant" : 46 ,
        "nom" : "Far breton" ,
        "portions" : 6 ,
        "ingredients" : [
            {
                "ingredient" : "Farine" ,
                "quantite" : 250 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Sucre" ,
                "quantite" : 150 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Sucre vanillé" ,
                "quantite" : 1 ,
                "unite" : "sachets"
            } ,
            {
                "ingredient" : "Oeuf" ,
                "quantite" : 4
            } ,
            {
                "ingredient" : "Lait" ,
                "quantite" : 1 ,
                "unite" : "litre"
            } ,
            {
                "ingredient" : "Pruneaux" ,
                "quantite" : 100 ,
                "unite" : "grammes"
            }
        ] ,
        "temps" : 60 ,
        "description" : "Mélanger la farine avec le sucre et les oeufs en ajoutant du sucre vanillé. Ajouter le lait petit à petit. Ajouter un petit vers de rhum. Verser la masse dans un plat beurré y placer les pruneaux et faire cuire à 200 ° pendentif 45 minutes" ,
        "appareil" : "Quatre" ,
        "ustensiles" : [ "fouet" ,  "moule" ,  "verres" ]
    } ,
    {
        "identifiant" : 47 ,
        "nom" : "Mousse au citron" ,
        "portions" : 6 ,
        "ingredients" : [
            {
                "ingredient" : "Jus de citron" ,
                "quantite" : 100 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Mascarpone" ,
                "quantite" : 250 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Sucre" ,
                "quantite" : 100 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Crème Fraîche" ,
                "quantite" : 20 ,
                "unite" : "cl"
            }
        ] ,
        "temps" : 5 ,
        "description" : "Mélanger le jus de citron avec le sucre et la mascarpone. Ajouter la crème fraiche. Mélanger le tout et mettre au congélateur pendant 1 heure. Servir" ,
        "appareil" : "Saladier" ,
        "ustensiles" : [ "fouet" ,  "verres" ,  "cuillère en bois" ]
    } ,
    {
        "identifiant" : 48 ,
        "nom" : "Pizza" ,
        "portions" : 4 ,
        "ingredients" : [
            {
                "ingredient" : "Pâte à pizza" ,
                "quantite" : 1
            } ,
            {
                "ingredient" : "Tomates pelées" ,
                "quantite" : 1 ,
                "unit" : "boites"
            } ,
            {
                "ingredient" : "Lardons" ,
                "quantite" : 1 ,
                "unite" : "barquettes"
            } ,
            {
                "ingredient" : "Champignons de paris" ,
                "quantite" : 1 ,
                "unit" : "boites"
            } ,
            {
                "ingredient" : "Gruyère" ,
                "quantite" : 200 ,
                "unite" : "grammes"
            }
        ] ,
        "temps" : 40 ,
        "description" : "Étaler la pate a pizza. Ecraser les tomates pelées, les étaler sur la pâte, ajouter les lardons et les champignons. Ajouter le gruyère eet passer au four à 220° durant 20 minutes" ,
        "appareil" : "Quatre" ,
        "ustensiles" : [ "rouleau à pâtisserie" ,  "râpe à fromage" , "couteau" ]
    } ,
    {
        "identifiant" : 49 ,
        "nom" : "Smoothie tropical" ,
        "portions" : 4 ,
        "ingredients" : [
            {
                "ingredient" : "Bananes" ,
                "quantite" : 2
            } ,
            {
                "ingredient" : "Kiwis" ,
                "quantite" : 3
            } ,
            {
                "ingredient" : "Mangue" ,
                "quantite" : 1
            } ,
            {
                "ingredient" : "Ananas" ,
                "quantite" : 4 ,
                "unite" : "tranches"
            } ,
            {
                "ingredient" : "Miel" ,
                "quantite" : 2 ,
                "unite" : "cuillères à soupe"
            }
        ] ,
        "temps" : 0 ,
        "description" : "Découper les fruits. Le passer au blender jusqu'à obtenir une texture liquide. Mettre au frais. Servir" ,
        "appareil" : "Mixeur" ,
        "ustensiles" : [ "couteau" ,  "verres" ]
    } ,
    {
        "identifiant" : 50 ,
        "nom" : "Frangipane" ,
        "portions" : 2 ,
        "ingredients" : [
            {
                "ingredient" : "Pâte feuilletée" ,
                "quantite" : 400 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Oeuf" ,
                "quantite" : 6
            } ,
            {
                "ingredient" : "Poudre d'amendes" ,
                "quantite" : 500 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Beurre" ,
                "quantite" : 500 ,
                "unite" : "grammes"
            } ,
            {
                "ingredient" : "Sucre glace" ,
                "quantite" : 500 ,
                "unite" : "grammes"
            }
        ] ,
        "temps" : 60 ,
        "description" : "Préparer la frangipane : Mélanger le sucre la poudre d'amander, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes" ,
        "appareil" : "Quatre" ,
        "ustensiles" : [ "rouleau à pâtisserie" , "fouet" ]
    }
]