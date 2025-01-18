# Projet HTMX Demo

Ce projet est une démo simple illustrant l'utilisation de la bibliothèque HTMX pour intégrer AJAX, les transitions CSS, les WebSockets et les Server Sent Events directement dans HTML. Cela permet de construire des interfaces utilisateur modernes avec la simplicité et la puissance de l'hypertexte.

## Installation

1. Installez les dépendances.

    ```bash
    npm install
    ```

## Exécution

1. Lancez le serveur.

    ```bash
    node server.js
    ```

2. Ouvrez le fichier `index.html` dans votre navigateur.

## Utilisation

- Cliquez sur le texte `[click here !]` pour déclencher une requête AJAX à l'URL `http://localhost:9300/messages`.
- Dans la section "Add a Product", utilisez le formulaire pour ajouter un produit en faisant une requête POST à l'URL `http://localhost:9300/products`.
- Dans la section "Search with debounce", tapez un nom de produit dans le champ de recherche pour effectuer une recherche en utilisant une requête GET à l'URL `http://localhost:9300/products` avec un délai de 700 ms.

## Structure du projet

- `index.html`: Fichier HTML principal avec des exemples d'utilisation d'HTMX.
- `style.css`: Fichier CSS pour la mise en page.
- `server.js`: Fichier du serveur Express avec des exemples d'API pour les messages et les produits.

---

![image](https://github.com/user-attachments/assets/45c65eb6-6447-4ae6-b36f-11069bed83ef)
