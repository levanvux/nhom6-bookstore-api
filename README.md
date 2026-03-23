# 📦 Backend API Server

> **Phục vụ môn học:** NT542 — Lập trình kịch bản tự động hoá cho quản trị và bảo mật mạng

---

## 🛠️ Công nghệ sử dụng

| Thành phần | Công nghệ |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| Dữ liệu | In-memory (in JavaScript array) |

---

## 📁 Cấu trúc thư mục

```
my-api/
├── index.js          # Toàn bộ logic API
├── package.json      
├── package-lock.json 
└── node_modules/     
```

---

## ⚙️ Cài đặt và chạy

### Yêu cầu

- [Node.js](https://nodejs.org)

### Các bước

```bash
# 1. Clone project
git clone <repo-url>
cd my-api

# 2. Cài đặt dependencies
npm install

# 3. Chạy server
node index.js
```

Server khởi động tại: `http://localhost:3003`

---

## API Endpoints

### Lấy tất cả sách

```
GET /books
```

**Response:**
```json
{
  "success": true,
  "data": [
    { "id": 1, "title": "Lập trình Node.js", "author": "Nam" },
    { "id": 2, "title": "Clean Code", "author": "Robert C. Martin" }
  ]
}
```

---

### Lấy một cuốn sách

```
GET /books/:id
```

**Response thành công (`200`):**
```json
{
  "success": true,
  "data": { "id": 1, "title": "Lập trình Node.js", "author": "Nam" }
}
```

**Response lỗi (`404`):**
```json
{ "success": false, "message": "Không tìm thấy sách" }
```

---

### Thêm sách mới

```
POST /books
Content-Type: application/json
```

**Request body:**
```json
{ "title": "Tên sách", "author": "Tác giả" }
```

**Response thành công (`201`):**
```json
{
  "success": true,
  "data": { "id": 3, "title": "Tên sách", "author": "Tác giả" }
}
```

---

### Cập nhật sách

```
PUT /books/:id
Content-Type: application/json
```

**Request body** (một hoặc cả hai field):
```json
{ "title": "Tên mới", "author": "Tác giả mới" }
```

---

### Xoá sách

```
DELETE /books/:id
```

**Response thành công (`200`):**
```json
{ "success": true, "message": "Đã xoá thành công" }
```

---

## Test nhanh

```bash
curl http://localhost:3003/books

```
