function generateReport() {
  const report = document.getElementById("report");

  // Xóa dữ liệu cũ
  report.innerHTML = "";

  // Dữ liệu mẫu (giả lập từ TPS)
  const data = [
    { service: "Gội đầu dưỡng sinh", count: 5 },
    { service: "Chăm sóc da", count: 3 },
    { service: "Combo thư giãn", count: 2 }
  ];

  // Hiển thị báo cáo
  data.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.service}: ${item.count} lượt`;
    report.appendChild(li);
  });
}
