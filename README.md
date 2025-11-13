
# 🎉 Meme Template Viewer

A fast, clean, and responsive **Meme Template Viewer** built using **React + Tailwind CSS**.  
It fetches meme templates from the **Imgflip API**, displays them in a 4-column grid, and includes a full-width search bar for instant filtering.

---

## 🚀 Features

- 🔍 **Live Search** — filter memes instantly by name  
- 🧱 **4-Column Grid Layout** — uniform cards with even spacing  
- 🖼️ **Modern Card Design**  
  - Rounded corners  
  - Light borders  
  - Soft shadows  
  - Hover animation  
- 🎨 **Responsive UI** powered by Tailwind CSS  
- ⚡ **Fast Data Fetching** using the Imgflip API  

---

## 📸 Preview

The UI includes:

- Large centered heading  
- Full-width search bar  
- Clean meme cards  

---

## 🛠️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/meme-template-viewer.git
````

### 2. Navigate into the project

```bash
cd meme-template-viewer
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Your app will be available at:

```
http://localhost:5173/
```

---

## 🎨 Technologies Used

* **React (Vite)**
* **Tailwind CSS**
* **Imgflip Meme API**
* **JavaScript / JSX**
* **CSS Grid**

---

## 📂 Folder Structure

```
meme-template-viewer/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── public/
├── package.json
└── README.md
```

---

## 🌐 API Used

All meme data is fetched from:

```
https://api.imgflip.com/get_memes
```

API returns:

* Meme ID
* Meme Name
* Image URL
* Dimensions

---

## 💡 How It Works

1. Fetches meme data from Imgflip on page load
2. Stores meme list in React state
3. Uses `useMemo` to filter memes efficiently
4. Displays them in a responsive Tailwind grid

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new branch
3. Commit your changes
4. Open a pull request

---

## 📜 License

This project is released under the **MIT License**.

---

## ✨ Author

Developed by **Nitin** using React + Tailwind CSS.

```

