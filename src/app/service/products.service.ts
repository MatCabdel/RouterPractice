import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { 
  }

  product: Product[] = [      {
    nom: "MacBook Pro",
    categorie: "Électronique",
    quantite: 15,
    description: "Un ordinateur portable de haute performance avec un écran Retina et un processeur M1.",
    id: 1
},
{
    nom: "Chaise Ergonomique",
    categorie: "Mobilier",
    quantite: 40,
    description: "Chaise de bureau ergonomique ajustable, idéale pour de longues heures de travail.",
    id: 2
},
{
    nom: "Blender Professionnel",
    categorie: "Électroménager",
    quantite: 30,
    description: "Blender puissant avec plusieurs vitesses pour tous types de préparations culinaires.",
    id: 3
},
{
    nom: "Coffret de Thé",
    categorie: "Alimentation",
    quantite: 50,
    description: "Un assortiment de thés verts et noirs, venant des quatre coins du monde.",
    id: 4
},
{
    nom: "Kit de Jardinage",
    categorie: "Jardin",
    quantite: 20,
    description: "Kit complet comprenant pelle, râteau et gants, parfait pour les amateurs de jardinage.",
    id: 5
}];

getAllProducts(): Product[] {
  return this.product;
}

getProduct(id: number): Product {
  const product = this.product.find(product => product.id === id);
  return product as Product
}
}
