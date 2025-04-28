## 2. Version Control Systems (git, GitHub)

### 2 ways how to create VCS locally/remote repository:
#### 1st way
1. Create repository in GitHub
2. Clone repository to local
```bash
    git clone <yor GitHub repo link>
```
3. Open with VS Code
```bash
    cd <directory of your project>
    code . -n
```

### 2nd way
1. Create root root folder 
2. Open this folder with VS code
3. Initiate local git repo:
```bash
    git init
``` 

4. Create local folder
```bash
    mkdir notes
```
5. Create files:
```bash
    # With MAC
        touch README.md
    # With Windows
        new-item README.md
```

6. Check file status:
```bash
    git status
```

7. Add  files and commit: 
```bash
    git add .
    git commit -m "Initial commit"
```
8. Continue with adding files and committing
9. List all commits in current branch:
```bash
    git log
```
10. Create new repo in GitHub
11. Setup local/remote repo and push
```bash
    git remote add origin <your GitHub repo link>
    git branch -M main
    git push -u origin main
```

