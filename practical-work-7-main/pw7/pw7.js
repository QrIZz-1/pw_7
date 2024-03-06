module.exports = function(RED) {
    function CPUtemperatureNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        
        // Функція для визначення температури CPU (потрібно додати реальну логіку)
        function getCPUtemperature() {
            // Логіка для отримання температури CPU
            // В цьому прикладі просто генеруємо випадкове число від 30 до 90
            return Math.floor(Math.random() * (90 - 30 + 1)) + 30;
        }
        
        node.on('input', function(msg) {
            // Отримуємо температуру CPU
            const cpuTemperature = getCPUtemperature();
            
            // Оновлюємо вихідне повідомлення з отриманою температурою
            msg.payload = cpuTemperature;
            
            // Надсилаємо повідомлення далі
            node.send(msg);
        });
    }
    
    // Реєстрація вузла в Node-RED
    RED.nodes.registerType("cpu-temperature", CPUtemperatureNode);
}
