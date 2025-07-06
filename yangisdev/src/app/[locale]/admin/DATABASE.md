# MongoDB Database Schema

## Tổng quan

Database của hệ thống sẽ sử dụng MongoDB với các collection chính sau:

1. `users` - Thông tin người dùng
2. `pomodoro_sessions` - Phiên làm việc pomodoro
3. `calendar_events` - Sự kiện lịch
4. `tasks` - Nhiệm vụ/Todo list
5. `notes` - Ghi chú với từ khóa

## Schema chi tiết

### Collection: users

```javascript
{
  _id: ObjectId,
  username: String,         // Tên đăng nhập
  email: String,            // Email người dùng
  password: String,         // Password đã hash
  telegramId: String,       // ID Telegram của người dùng
  telegramUsername: String, // Username Telegram
  createdAt: Date,          // Ngày tạo tài khoản
  updatedAt: Date,          // Ngày cập nhật thông tin
  settings: {
    pomodoro: {
      workDuration: Number,     // Thời gian làm việc (phút), mặc định 25
      shortBreakDuration: Number, // Thời gian nghỉ ngắn (phút), mặc định 5
      longBreakDuration: Number,  // Thời gian nghỉ dài (phút), mặc định 15
      longBreakInterval: Number,  // Số pomodoro trước khi nghỉ dài, mặc định 4
      autoStartBreaks: Boolean,   // Tự động bắt đầu giờ nghỉ
      autoStartPomodoros: Boolean // Tự động bắt đầu pomodoro mới
    },
    notifications: {
      email: Boolean,        // Nhận thông báo qua email
      browser: Boolean,      // Nhận thông báo qua browser
      telegram: Boolean,     // Nhận thông báo qua telegram
      sound: Boolean         // Bật âm thanh thông báo
    },
    theme: String,           // Theme hiển thị (light/dark)
    language: String         // Ngôn ngữ (vi/en)
  }
}
```

### Collection: pomodoro_sessions

```javascript
{
  _id: ObjectId,
  userId: ObjectId,         // Reference tới user
  startTime: Date,          // Thời gian bắt đầu phiên
  endTime: Date,            // Thời gian kết thúc phiên
  duration: Number,         // Thời lượng (phút)
  type: String,             // Loại phiên: "work", "short_break", "long_break"
  completed: Boolean,       // Đã hoàn thành hay bị gián đoạn
  taskId: ObjectId,         // Reference tới task (nếu có)
  notes: String,            // Ghi chú về phiên làm việc
  tags: [String],           // Các tag cho phiên làm việc
  interruptions: [{
    time: Date,             // Thời điểm gián đoạn
    duration: Number,       // Thời lượng gián đoạn (giây)
    reason: String          // Lý do gián đoạn
  }]
}
```

### Collection: calendar_events

```javascript
{
  _id: ObjectId,
  userId: ObjectId,         // Reference tới user
  title: String,            // Tiêu đề sự kiện
  description: String,      // Mô tả chi tiết
  startTime: Date,          // Thời gian bắt đầu
  endTime: Date,            // Thời gian kết thúc
  allDay: Boolean,          // Sự kiện cả ngày
  location: String,         // Địa điểm
  color: String,            // Màu sắc hiển thị
  category: String,         // Phân loại (work, personal, study...)
  recurrence: {
    frequency: String,      // none, daily, weekly, monthly, yearly
    interval: Number,       // Số lần lặp lại
    endDate: Date,          // Ngày kết thúc lặp lại
    daysOfWeek: [Number],   // Các ngày trong tuần (0-6, 0=Sunday)
    exceptions: [Date]      // Các ngày ngoại lệ không lặp lại
  },
  reminders: [{
    time: Number,           // Thời gian trước sự kiện (phút)
    type: String            // Loại nhắc nhở (email, notification, telegram)
  }],
  isTaskEvent: Boolean,     // Sự kiện liên kết với task
  taskId: ObjectId,         // ID của task liên quan (nếu có)
  createdAt: Date,
  updatedAt: Date
}
```

### Collection: tasks

```javascript
{
  _id: ObjectId,
  userId: ObjectId,         // Reference tới user
  title: String,            // Tiêu đề nhiệm vụ
  description: String,      // Mô tả chi tiết
  status: String,           // Trạng thái: "todo", "in_progress", "done", "cancelled"
  priority: Number,         // Độ ưu tiên: 1 (thấp) - 5 (cao)
  dueDate: Date,            // Hạn chót
  category: String,         // Phân loại (work, personal, study...)
  tags: [String],           // Các tag
  createdAt: Date,          // Ngày tạo
  updatedAt: Date,          // Ngày cập nhật
  completedAt: Date,        // Ngày hoàn thành
  createdVia: String,       // Nguồn tạo task: "web", "telegram"
  subTasks: [{
    _id: ObjectId,
    title: String,          // Tiêu đề nhiệm vụ con
    completed: Boolean,     // Trạng thái hoàn thành
    createdAt: Date,        // Ngày tạo
    completedAt: Date       // Ngày hoàn thành
  }],
  pomodoroEstimate: Number, // Số pomodoro dự kiến cần thiết
  pomodoroSpent: Number,    // Số pomodoro đã dùng
  reminderTime: Date,       // Thời gian nhắc nhở
  reminderSent: Boolean,    // Đã gửi nhắc nhở chưa
  recurrence: {
    frequency: String,      // none, daily, weekly, monthly
    interval: Number,       // Số lần lặp lại
    endDate: Date           // Ngày kết thúc lặp lại
  }
}
```

### Collection: notes

```javascript
{
  _id: ObjectId,
  userId: ObjectId,         // Reference tới user
  title: String,            // Tiêu đề ghi chú
  content: String,          // Nội dung ghi chú
  keywords: [String],       // Các từ khóa tìm kiếm
  category: String,         // Phân loại ghi chú
  tags: [String],           // Các tag
  createdAt: Date,          // Ngày tạo
  updatedAt: Date,          // Ngày cập nhật
  createdVia: String,       // Nguồn tạo ghi chú: "web", "telegram"
  format: String,           // Định dạng: "text", "markdown", "html"
  isPinned: Boolean,        // Ghim ghi chú
  isArchived: Boolean,      // Đã lưu trữ
  relatedTasks: [ObjectId], // Các task liên quan
  attachments: [{
    name: String,           // Tên file đính kèm
    url: String,            // URL file đính kèm
    type: String,           // Loại file
    size: Number,           // Kích thước file
    createdAt: Date         // Ngày tạo
  }]
}
```

### Collection: telegram_sessions

```javascript
{
  _id: ObjectId,
  userId: ObjectId,         // Reference tới user
  telegramId: String,       // ID Telegram của user
  chatId: String,           // ID của chat
  state: String,            // Trạng thái hiện tại của bot conversation
  context: Object,          // Dữ liệu context cho conversation
  lastActivity: Date,       // Thời gian hoạt động cuối
  isActive: Boolean,        // Session còn hoạt động
  createdAt: Date,          // Ngày tạo session
  updatedAt: Date           // Ngày cập nhật session
}
```

### Collection: statistics

```javascript
{
  _id: ObjectId,
  userId: ObjectId,         // Reference tới user
  date: Date,               // Ngày thống kê
  pomodoro: {
    completed: Number,      // Số pomodoro hoàn thành
    totalMinutes: Number,   // Tổng số phút làm việc
    categories: [{
      name: String,         // Tên category
      minutes: Number       // Số phút làm việc
    }]
  },
  tasks: {
    completed: Number,      // Số task hoàn thành
    created: Number,        // Số task tạo mới
    categories: [{
      name: String,         // Tên category
      completed: Number,    // Số task hoàn thành
      created: Number       // Số task tạo mới
    }]
  },
  notes: {
    created: Number,        // Số ghi chú tạo mới
    categories: [{
      name: String,         // Tên category
      count: Number         // Số ghi chú
    }]
  }
}
```

## Indexes

### users Collection
```javascript
// Tạo index cho email và telegramId
db.users.createIndex({ "email": 1 }, { unique: true })
db.users.createIndex({ "telegramId": 1 }, { unique: true, sparse: true })
```

### pomodoro_sessions Collection
```javascript
// Index theo user và thời gian
db.pomodoro_sessions.createIndex({ "userId": 1, "startTime": -1 })
db.pomodoro_sessions.createIndex({ "taskId": 1, "startTime": -1 })
```

### calendar_events Collection
```javascript
// Index theo user và thời gian
db.calendar_events.createIndex({ "userId": 1, "startTime": 1 })
db.calendar_events.createIndex({ "userId": 1, "endTime": 1 })
db.calendar_events.createIndex({ "taskId": 1 }, { sparse: true })
```

### tasks Collection
```javascript
// Index theo user, trạng thái và deadline
db.tasks.createIndex({ "userId": 1, "status": 1, "dueDate": 1 })
db.tasks.createIndex({ "userId": 1, "category": 1 })
db.tasks.createIndex({ "userId": 1, "tags": 1 })
```

### notes Collection
```javascript
// Index cho từ khóa và nội dung để tìm kiếm nhanh
db.notes.createIndex({ "userId": 1, "keywords": 1 })
db.notes.createIndex({ "userId": 1, "content": "text", "title": "text" })
db.notes.createIndex({ "userId": 1, "category": 1 })
db.notes.createIndex({ "userId": 1, "tags": 1 })
```

### telegram_sessions Collection
```javascript
// Index theo telegramId
db.telegram_sessions.createIndex({ "telegramId": 1 })
db.telegram_sessions.createIndex({ "userId": 1 })
```

## Relationships

1. `users` → `pomodoro_sessions`: One-to-Many (1 user có nhiều pomodoro sessions)
2. `users` → `calendar_events`: One-to-Many (1 user có nhiều calendar events)
3. `users` → `tasks`: One-to-Many (1 user có nhiều tasks)
4. `users` → `notes`: One-to-Many (1 user có nhiều notes)
5. `tasks` → `pomodoro_sessions`: One-to-Many (1 task có thể gắn với nhiều pomodoro sessions)
6. `tasks` → `calendar_events`: One-to-Many (1 task có thể liên kết với nhiều calendar events)
7. `notes` → `tasks`: Many-to-Many (notes có thể liên kết với nhiều tasks)

## Data Validation

MongoDB cho phép định nghĩa schema validation để đảm bảo tính toàn vẹn dữ liệu. Ví dụ validation cho collection tasks:

```javascript
db.createCollection("tasks", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["userId", "title", "status", "createdAt"],
      properties: {
        userId: {
          bsonType: "objectId",
          description: "must be an objectId and is required"
        },
        title: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        status: {
          enum: ["todo", "in_progress", "done", "cancelled"],
          description: "can only be one of the enum values and is required"
        },
        priority: {
          bsonType: "int",
          minimum: 1,
          maximum: 5,
          description: "must be an integer between 1 and 5"
        }
      }
    }
  }
})
```

## Cân nhắc hiệu suất và khả năng mở rộng

1. **Sharding**: Nếu lượng dữ liệu tăng lên đáng kể, có thể triển khai sharding theo userId để phân tán dữ liệu.
2. **TTL Index**: Sử dụng TTL (Time-To-Live) index cho dữ liệu tạm thời hoặc cần tự động xóa sau một thời gian.
3. **Caching**: Triển khai Redis để cache dữ liệu thường xuyên truy cập như task của ngày hiện tại, pomodoro session hiện tại.
4. **Aggregation Pipeline**: Sử dụng aggregation pipeline để tính toán các thống kê và báo cáo.

## Bảo mật dữ liệu

1. **Encryption at Rest**: Mã hóa dữ liệu lưu trữ.
2. **Field-Level Encryption**: Mã hóa các trường nhạy cảm như thông tin cá nhân.
3. **Access Control**: Thiết lập quyền truy cập dữ liệu dựa trên vai trò.
4. **Audit Logging**: Ghi log các thao tác truy cập và thay đổi dữ liệu quan trọng. 