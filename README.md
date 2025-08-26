# 📬 Daily English Sentence Sender

**Daily English Sentence Sender** is a MERN-based application that helps users improve their English by sending them a useful English sentence every day via email.  
Each sentence comes with its meaning, usage, and optional pronunciation support, making it easier for users to learn practical English step by step.

---

## ✨ Features

- 👤 **User Management** – Signup/Login, set preferred time for receiving sentences  
- 📩 **Daily Delivery** – Automatically sends sentences via email using scheduled tasks  
- 📝 **Sentence Database** – Store sentences with meaning, usage examples, and optional audio  
- ⚡ **Automation** – Uses cron jobs for daily scheduling  
- 🛠️ **Admin Support** – Add, update, or manage sentences (optional advanced feature)  

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT (JSON Web Tokens)  
- **Email Service:** Nodemailer  
- **Scheduler:** node-cron  
- **Frontend (Planned):** React.js  

---

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/daily-english-sender.git
cd SENTENZY/server

2. Install Dependencies

npm install

3. Configure Environment Variables

Create a .env file in the server:

PORT=5000
MONGO_URL=your_mongodb_url

4. Run the Server

npm run dev

📆 Cron Job (Automation)

This project uses node-cron to automatically send sentences every day.
Each user can set their preferred time, and the scheduler ensures they receive the sentence on time.

🚀 Roadmap
✅ User authentication (JWT-based)

✅ Sentence database & email delivery

✅ Daily cron job scheduling

⏳ React frontend (user dashboard)

⏳ Admin dashboard for managing sentences

⏳ AI-generated custom sentences (future)

🤝 Contributing
Contributions are welcome! Please fork the repo and create a pull request.
You can also open an issue for feature requests or bug reports.

📜 License
This project is licensed under the MIT License.
Feel free to use and modify it for your learning or projects.

👨‍💻 Author
Developed by [Yashraj Pal] ✨
A project to showcase MERN stack + automation skills and help learners improve English daily.
