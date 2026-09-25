# 📋 GitHub Setup Guide for Person 1

Follow these quick steps to push this folder to your GitHub account:

### Step 1: Create a New GitHub Repository
1. Go to [https://github.com/new](https://github.com/new).
2. Name your repository (e.g. `rannaghor-person-1-rannaghor-recipe-engine` or `rannaghor-person-1`).
3. Set it to **Public** or **Private**.
4. **IMPORTANT**: Leave "Add a README file", "Add .gitignore", and "Choose a license" **UNCHECKED** (this folder already includes them!).
5. Click **Create repository**.
6. Copy the repository URL (e.g. `https://github.com/your-username/your-repo.git`).

---

### Step 2: Push Your Code
You can use any of these 3 easy options:

#### Option 1: Double-click `push-to-github.bat`
Simply double-click the `push-to-github.bat` file inside this folder, paste your repository URL, and hit Enter.

#### Option 2: Run in Terminal
Open CMD or PowerShell in this folder:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

#### Option 3: GitHub Desktop
1. Open **GitHub Desktop** from your Desktop shortcut.
2. Click **File** > **Add Local Repository** (or press `Ctrl + O`).
3. Select this folder (`Person-1-RannaGhor-Recipe-Engine`).
4. Click **Publish repository** in GitHub Desktop.

Done! Your code and documentation are now live on GitHub.
