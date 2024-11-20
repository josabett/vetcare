
function scheduleTurn(event) {
    event.preventDefault();
    const vetName = document.getElementById("veterinario-turno").value;
    const turnDate = document.getElementById("fecha-turno").value;
    document.getElementById("turnOutput").innerHTML = `Turno asignado al veterinario ${vetName} en la fecha ${turnDate}.`;
}
function registerPatient(event) {
    event.preventDefault();
    const petName = document.getElementById("nombre-paciente").value;
    const ownerName = document.getElementById("nombre-dueno").value;
    document.getElementById("patientOutput").innerHTML = `Paciente ${petName} de ${ownerName} registrado.`;
}
function generateInvoice(event) {
    event.preventDefault();
    const patientName = document.getElementById("factura-paciente").value;
    const amount = document.getElementById("monto-factura").value;
    document.getElementById("invoiceOutput").innerHTML = `Factura de ${patientName} por $${amount} generada.`;
}
function createPrescription(event) {
    event.preventDefault();
    const patientName = document.getElementById("receta-paciente").value;
    const description = document.getElementById("descripcion-receta").value;
    document.getElementById("prescriptionOutput").innerHTML = `Receta para ${patientName}: ${description}`;
}
function recordMedicalAttention(event) {
    event.preventDefault();
    const patientName = document.getElementById("paciente-atencion").value;
    const details = document.getElementById("detalle-atencion").value;
    document.getElementById("medicalAttentionOutput").innerHTML = `Atención médica registrada para ${patientName}: ${details}`;
}
function submitContactForm(event) {
    event.preventDefault();
    const name = document.getElementById("nombre").value;
    const message = document.getElementById("mensaje").value;
    document.getElementById("contactOutput").innerHTML = `Gracias por contactarnos, ${name}. Hemos recibido tu mensaje: "${message}".`;
}