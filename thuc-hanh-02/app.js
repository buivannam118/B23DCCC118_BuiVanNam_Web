const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let rooms = [
    { id: 1, name: "Phòng Deluxe", price: 100 },
    { id: 2, name: "Phòng Tiêu Chuẩn", price: 80 }
];

app.get('/rooms', (req, res) => {
    res.json(rooms);
});

app.get('/rooms/:id', (req, res) => {
    const room = rooms.find(r => r.id === parseInt(req.params.id));
    if (!room) return res.status(404).json({ message: "Không tìm thấy phòng" });
    res.json(room);
});

app.post('/rooms', (req, res) => {
    const newRoom = {
        id: rooms.length + 1,
        name: req.body.name,
        price: req.body.price
    };
    rooms.push(newRoom);
    res.status(201).json(newRoom);
});

app.put('/rooms/:id', (req, res) => {
    const room = rooms.find(r => r.id === parseInt(req.params.id));
    if (!room) return res.status(404).json({ message: "Không tìm thấy phòng" });

    room.name = req.body.name;
    room.price = req.body.price;
    res.json(room);
});

app.delete('/rooms/:id', (req, res) => {
    rooms = rooms.filter(r => r.id !== parseInt(req.params.id));
    res.json({ message: "Xóa phòng thành công" });
});

app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
