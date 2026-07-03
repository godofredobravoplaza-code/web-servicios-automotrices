document.addEventListener('DOMContentLoaded', () => {
    // Service Details Data
    const servicesData = {
        lavado: {
            title: "Lavado de Autos Premium",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 11v4c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-4"/><circle cx="12" cy="7.5" r="1.5"/></svg>`,
            desc: "Brindamos una limpieza minuciosa y profesional utilizando productos biodegradables de alta gama para proteger la pintura y el interior de tu vehículo.",
            features: [
                "Shampoo con cera y pH neutro de alto brillo",
                "Limpieza y detallado profundo de llantas y neumáticos",
                "Aspirado exhaustivo e hidratación de plásticos interiores",
                "Desinfección profunda de habitáculo con ozono (elimina bacterias y olores)"
            ]
        },
        revision: {
            title: "Gestión de Revisión Técnica",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="m9 10 2 2 4-4"/><path d="M7 16h10"/></svg>`,
            desc: "Ahorra tiempo y evita dolores de cabeza. Retiramos tu vehículo en tu domicilio u oficina, lo sometemos a una inspección previa, realizamos el trámite en la PRT y te lo devolvemos aprobado.",
            features: [
                "Pre-revisión preventiva de luces, frenos, gases y suspensión",
                "Retiro y entrega a domicilio con choferes profesionales certificados",
                "Gestión rápida del trámite en planta de revisión técnica (PRT)",
                "Seguro de cobertura total activo durante todo el traslado"
            ]
        },
        compraventa: {
            title: "Asesoría Comercial Compra/Venta",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
            desc: "Te acompañamos en todo el proceso de adquisición o venta de un vehículo para asegurar que obtengas el mejor trato y que no corras riesgos legales o mecánicos.",
            features: [
                "Revisión pre-compra completa (motor, transmisión, estructura y scanner)",
                "Informe legal detallado (multas, siniestros y dueños anteriores)",
                "Valoración comercial objetiva basada en mercado actual",
                "Redacción de contratos de compraventa y gestión en notaría"
            ]
        },
        general: {
            title: "Asesorías en General",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
            desc: "Expertos mecánicos y comerciales a tu disposición para cualquier consulta de mecánica preventiva, diagnósticos, selección de talleres o cotización de repuestos.",
            features: [
                "Interpretación de códigos de falla y diagnóstico computarizado",
                "Evaluación y comparación de presupuestos de otros talleres",
                "Asesoramiento técnico para viajes largos u optimización de combustible",
                "Guía para la contratación de pólizas de seguros automotrices"
            ]
        }
    };

    // Modal DOM Elements
    const detailsModal = document.getElementById('detailsModal');
    const bookingModal = document.getElementById('bookingModal');
    const closeButtons = document.querySelectorAll('.modal-close');
    
    // Select dynamic elements in Details Modal
    const modalTitle = document.getElementById('modalTitle');
    const modalIcon = document.getElementById('modalIcon');
    const modalDesc = document.getElementById('modalDesc');
    const modalFeaturesList = document.getElementById('modalFeaturesList');
    
    // Forms & Success Message
    const bookingForm = document.getElementById('bookingForm');
    const successBanner = document.getElementById('successBanner');

    // Open Service Details Modal
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const serviceKey = card.getAttribute('data-service');
            const data = servicesData[serviceKey];
            
            if (data) {
                modalTitle.textContent = data.title;
                modalIcon.innerHTML = data.icon;
                modalDesc.textContent = data.desc;
                
                // Clear and render features list
                modalFeaturesList.innerHTML = '';
                data.features.forEach(feature => {
                    const li = document.createElement('li');
                    li.className = 'feature-item';
                    li.innerHTML = `
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>${feature}</span>
                    `;
                    modalFeaturesList.appendChild(li);
                });
                
                openModal(detailsModal);
            }
        });
    });

    // Open Booking/Quote Modal
    const quoteBtn = document.getElementById('quoteBtn');
    quoteBtn.addEventListener('click', () => {
        openModal(bookingModal);
    });

    // Helper functions for modals
    function openModal(modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Disable scroll background
    }

    function closeModal(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scroll
        
        // If it was the booking modal, reset form and success state on close
        if (modal === bookingModal) {
            setTimeout(() => {
                bookingForm.style.display = 'flex';
                successBanner.style.display = 'none';
                bookingForm.reset();
            }, 300);
        }
    }

    // Attach close events
    closeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal');
            closeModal(modal);
        });
    });

    // Close on click outside content
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target);
        }
    });

    // Handle Form Submission (Mock)
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Hide form and show success message with animation
        bookingForm.style.display = 'none';
        successBanner.style.display = 'flex';
        
        // In a real application, you would send data via fetch/AJAX here.
        const formData = new FormData(bookingForm);
        console.log('Datos del formulario recibidos:', {
            nombre: formData.get('nombre'),
            telefono: formData.get('telefono'),
            servicio: formData.get('servicio'),
            mensaje: formData.get('mensaje')
        });
    });
});
