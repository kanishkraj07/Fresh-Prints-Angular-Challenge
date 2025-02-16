# GitHub User Search - Fresh Prints Assignment By Kanishk Mogalraj  

## 📌 Assignment Overview  
- Developed a **Single Page Application (SPA)** using **Angular Framework**.  
- Integrated **GitHub API** to fetch and display user profiles.  
- Implemented **local storage** to maintain search history.  
- Used **Signals** for efficient and reactive state management.  
- Implemented **Routing** to navigate between **Home (Search) and History pages**.  

---

## 🚀 Key Features  

### 🏠 Home Page (Search Page)  
- Users can **search GitHub users** by entering a username.  
- Results are displayed in a **table below the search bar**.  
- Used **Signals** to track and update search results in real-time.  
- If a user searches for the **same username again**, it is **not duplicated** in history. Instead:  
  - The existing entry is **moved to the top** (sorted).  

### 📜 History Page  
- Displays the **search history** stored in local storage.  
- Used **Signals** to update history instantly when a new search is performed.  
- Shows both **successful** and **unsuccessful** searches.  
- Users can **clear specific search entries** to remove clutter.   
---

## 🔧 Technical Implementation  

✅ **Signals used for state management**, ensuring **real-time updates** without extra change detection.  
✅ **Local Storage** used to store search history for persistence.  
✅ **GitHub API Integration** to fetch user details dynamically.  
✅ **Sorting Mechanism** implemented to move repeated searches to the top.  
✅ **Angular Routing** added to switch between Home and History pages.  
✅ **Unit Test Cases** written for core functionalities.  
✅ **Optimized Performance** by preventing unnecessary API calls for duplicate searches.  
✅ **Clean and modular code structure** following best practices.  
