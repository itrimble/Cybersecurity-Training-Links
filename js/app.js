/**
 * CyberPath - Interactive Cybersecurity Career Guide
 * Main Application JavaScript
 */

(function() {
    'use strict';

    // ============================================
    // APPLICATION STATE
    // ============================================
    const state = {
        currentQuizQuestion: 0,
        quizAnswers: [],
        activeFilter: 'all',
        activeTab: 'platforms'
    };

    // ============================================
    // DOM ELEMENTS
    // ============================================
    const elements = {
        // Navigation
        mobileMenuBtn: document.querySelector('.mobile-menu-btn'),
        navLinks: document.querySelector('.nav-links'),

        // Quiz
        quizContent: document.getElementById('quizContent'),
        quizResults: document.getElementById('quizResults'),
        quizProgress: document.getElementById('quizProgress'),
        currentQuestion: document.getElementById('currentQuestion'),
        totalQuestions: document.getElementById('totalQuestions'),

        // Career Section
        careerGrid: document.getElementById('careerGrid'),
        filterBtns: document.querySelectorAll('.filter-btn'),

        // Certifications
        entryCerts: document.getElementById('entryCerts'),
        intermediateCerts: document.getElementById('intermediateCerts'),
        advancedCerts: document.getElementById('advancedCerts'),

        // Training
        trainingTabs: document.querySelectorAll('.tab-btn'),
        trainingContent: document.getElementById('trainingContent'),

        // Labs
        labsGrid: document.getElementById('labsGrid'),

        // Resources
        communityResources: document.getElementById('communityResources'),
        newsResources: document.getElementById('newsResources'),
        toolResources: document.getElementById('toolResources'),
        govResources: document.getElementById('govResources'),

        // Modal
        careerModal: document.getElementById('careerModal'),
        modalBody: document.getElementById('modalBody'),
        modalClose: document.querySelector('.modal-close'),
        modalOverlay: document.querySelector('.modal-overlay')
    };

    // ============================================
    // INITIALIZATION
    // ============================================
    function init() {
        // Set total questions
        elements.totalQuestions.textContent = CyberPathData.quizQuestions.length;

        // Render all sections
        renderQuizQuestion();
        renderCareers();
        renderCertifications();
        renderTraining('platforms');
        renderLabs();
        renderResources();

        // Set up event listeners
        setupEventListeners();
    }

    // ============================================
    // EVENT LISTENERS
    // ============================================
    function setupEventListeners() {
        // Mobile menu toggle
        elements.mobileMenuBtn.addEventListener('click', toggleMobileMenu);

        // Career filter buttons
        elements.filterBtns.forEach(btn => {
            btn.addEventListener('click', handleFilterClick);
        });

        // Training tabs
        elements.trainingTabs.forEach(tab => {
            tab.addEventListener('click', handleTabClick);
        });

        // Modal close
        elements.modalClose.addEventListener('click', closeModal);
        elements.modalOverlay.addEventListener('click', closeModal);

        // Keyboard navigation
        document.addEventListener('keydown', handleKeyDown);

        // Smooth scroll for nav links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', handleSmoothScroll);
        });
    }

    // ============================================
    // NAVIGATION
    // ============================================
    function toggleMobileMenu() {
        elements.navLinks.classList.toggle('active');
        elements.mobileMenuBtn.classList.toggle('active');
    }

    function handleSmoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Close mobile menu if open
            elements.navLinks.classList.remove('active');
        }
    }

    function handleKeyDown(e) {
        if (e.key === 'Escape' && !elements.careerModal.classList.contains('hidden')) {
            closeModal();
        }
    }

    // ============================================
    // QUIZ FUNCTIONALITY
    // ============================================
    function renderQuizQuestion() {
        const questions = CyberPathData.quizQuestions;

        if (state.currentQuizQuestion >= questions.length) {
            showQuizResults();
            return;
        }

        const question = questions[state.currentQuizQuestion];
        const progress = ((state.currentQuizQuestion + 1) / questions.length) * 100;

        elements.quizProgress.style.width = `${progress}%`;
        elements.currentQuestion.textContent = state.currentQuizQuestion + 1;

        elements.quizContent.innerHTML = `
            <div class="quiz-question">
                <h3>${question.question}</h3>
                <div class="quiz-options">
                    ${question.options.map((option, index) => `
                        <label class="quiz-option" data-index="${index}">
                            <input type="radio" name="quiz-${question.id}" value="${index}">
                            <span class="option-indicator"></span>
                            <span class="option-text">${option.text}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
            <div class="quiz-nav">
                ${state.currentQuizQuestion > 0 ?
                    '<button class="btn btn-secondary" id="prevQuestion">Previous</button>' :
                    '<div></div>'}
                <button class="btn btn-primary" id="nextQuestion" disabled>
                    ${state.currentQuizQuestion === questions.length - 1 ? 'See Results' : 'Next'}
                </button>
            </div>
        `;

        // Add event listeners
        const options = elements.quizContent.querySelectorAll('.quiz-option');
        const nextBtn = document.getElementById('nextQuestion');
        const prevBtn = document.getElementById('prevQuestion');

        options.forEach(option => {
            option.addEventListener('click', () => {
                options.forEach(o => o.classList.remove('selected'));
                option.classList.add('selected');
                nextBtn.disabled = false;
            });
        });

        nextBtn.addEventListener('click', () => {
            const selected = elements.quizContent.querySelector('.quiz-option.selected');
            if (selected) {
                const index = parseInt(selected.dataset.index);
                state.quizAnswers[state.currentQuizQuestion] = CyberPathData.quizQuestions[state.currentQuizQuestion].options[index].careers;
                state.currentQuizQuestion++;
                renderQuizQuestion();
            }
        });

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                state.currentQuizQuestion--;
                renderQuizQuestion();
            });
        }
    }

    function showQuizResults() {
        // Calculate career recommendations
        const careerScores = {};

        state.quizAnswers.forEach(careers => {
            careers.forEach(career => {
                careerScores[career] = (careerScores[career] || 0) + 1;
            });
        });

        // Sort by score
        const sortedCareers = Object.entries(careerScores)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3);

        const topCareer = CyberPathData.careers.find(c => c.id === sortedCareers[0][0]);
        const otherCareers = sortedCareers.slice(1).map(([id]) =>
            CyberPathData.careers.find(c => c.id === id)
        );

        elements.quizContent.classList.add('hidden');
        elements.quizResults.classList.remove('hidden');

        elements.quizResults.innerHTML = `
            <h3>Your Recommended Career Path</h3>
            <div class="result-career">${topCareer.icon} ${topCareer.title}</div>
            <p class="result-description">${topCareer.description}</p>
            <div class="result-salary">
                <strong>Salary Range:</strong> ${topCareer.salaryRange}
            </div>
            <div class="result-paths">
                <button class="btn btn-primary" onclick="window.CyberPath.showCareerDetail('${topCareer.id}')">
                    Explore This Path
                </button>
                <button class="btn btn-secondary" onclick="window.CyberPath.resetQuiz()">
                    Retake Quiz
                </button>
            </div>
            ${otherCareers.length > 0 ? `
                <div class="also-consider" style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--bg-tertiary);">
                    <h4 style="color: var(--text-muted); margin-bottom: 1rem;">Also Consider:</h4>
                    <div class="result-paths">
                        ${otherCareers.map(career => `
                            <button class="btn btn-outline btn-small" onclick="window.CyberPath.showCareerDetail('${career.id}')">
                                ${career.icon} ${career.title}
                            </button>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
        `;
    }

    function resetQuiz() {
        state.currentQuizQuestion = 0;
        state.quizAnswers = [];
        elements.quizContent.classList.remove('hidden');
        elements.quizResults.classList.add('hidden');
        renderQuizQuestion();
    }

    // ============================================
    // CAREER CARDS
    // ============================================
    function renderCareers(filter = 'all') {
        let careers = CyberPathData.careers;

        if (filter !== 'all') {
            careers = careers.filter(career => career.category === filter);
        }

        elements.careerGrid.innerHTML = careers.map(career => `
            <div class="career-card" data-category="${career.category}" onclick="window.CyberPath.showCareerDetail('${career.id}')">
                <div class="career-icon">${career.icon}</div>
                <h3>${career.title}</h3>
                <span class="career-level ${getLevelClass(career.level)}">${career.level}</span>
                <p>${career.description}</p>
                <div class="career-salary">
                    <span class="salary-range">${career.salaryRange}</span>
                    <span class="career-arrow">&rarr;</span>
                </div>
            </div>
        `).join('');
    }

    function getLevelClass(level) {
        if (level.includes('Entry')) return 'entry';
        if (level.includes('Senior') || level.includes('Executive')) return 'senior';
        return 'mid';
    }

    function handleFilterClick(e) {
        const filter = e.target.dataset.filter;
        state.activeFilter = filter;

        elements.filterBtns.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        renderCareers(filter);
    }

    // ============================================
    // CAREER DETAIL MODAL
    // ============================================
    function showCareerDetail(careerId) {
        const career = CyberPathData.careers.find(c => c.id === careerId);
        if (!career) return;

        elements.modalBody.innerHTML = `
            <div class="modal-header">
                <div class="modal-icon">${career.icon}</div>
                <div class="modal-title">
                    <h2>${career.title}</h2>
                    <p>${career.level} | ${career.salaryRange}</p>
                </div>
            </div>

            <div class="modal-section">
                <h3>Overview</h3>
                <p style="color: var(--text-secondary);">${career.description}</p>
            </div>

            <div class="modal-section">
                <h3>Key Skills</h3>
                <ul>
                    ${career.skills.map(skill => `<li>${skill}</li>`).join('')}
                </ul>
            </div>

            <div class="modal-section">
                <h3>Daily Tasks</h3>
                <ul>
                    ${career.dailyTasks.map(task => `<li>${task}</li>`).join('')}
                </ul>
            </div>

            <div class="modal-section">
                <h3>Recommended Certifications</h3>
                <div class="modal-certs">
                    ${career.certifications.map(cert => `
                        <span class="modal-cert-tag">${cert}</span>
                    `).join('')}
                </div>
            </div>

            <div class="modal-section">
                <h3>Learning Resources</h3>
                <div class="modal-resources">
                    ${career.resources.map(resource => `
                        <a href="${resource.url}" target="_blank" rel="noopener" class="modal-resource-link">
                            ${resource.name} &rarr;
                        </a>
                    `).join('')}
                </div>
            </div>

            <div class="modal-section">
                <h3>Career Progression</h3>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center;">
                    ${career.careerProgression.map((role, index) => `
                        <span style="color: var(--text-secondary);">${role}</span>
                        ${index < career.careerProgression.length - 1 ? '<span style="color: var(--accent-primary);">&rarr;</span>' : ''}
                    `).join('')}
                </div>
            </div>
        `;

        elements.careerModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        elements.careerModal.classList.add('hidden');
        document.body.style.overflow = '';
    }

    // ============================================
    // CERTIFICATIONS
    // ============================================
    function renderCertifications() {
        const certs = CyberPathData.certifications;

        elements.entryCerts.innerHTML = renderCertCards(certs.entry);
        elements.intermediateCerts.innerHTML = renderCertCards(certs.intermediate);
        elements.advancedCerts.innerHTML = renderCertCards(certs.advanced);
    }

    function renderCertCards(certs) {
        return certs.map(cert => `
            <div class="cert-card">
                <div class="cert-name">${cert.name}</div>
                <div class="cert-org">${cert.org}</div>
                <div class="cert-tags">
                    ${cert.tags.map(tag => `<span class="cert-tag">${tag}</span>`).join('')}
                </div>
                <div class="cert-link">
                    <a href="${cert.url}" target="_blank" rel="noopener">Learn More &rarr;</a>
                </div>
            </div>
        `).join('');
    }

    // ============================================
    // TRAINING RESOURCES
    // ============================================
    function handleTabClick(e) {
        const tab = e.target.dataset.tab;
        state.activeTab = tab;

        elements.trainingTabs.forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');

        renderTraining(tab);
    }

    function renderTraining(tab) {
        const training = CyberPathData.training[tab];

        elements.trainingContent.innerHTML = training.map(item => `
            <div class="training-card">
                <h4>${item.name}</h4>
                <p>${item.description}</p>
                <div class="training-meta">
                    ${item.free ? '<span class="training-badge free">Free</span>' : ''}
                    ${item.features.map(f => `<span class="training-badge">${f}</span>`).join('')}
                </div>
                <a href="${item.url}" target="_blank" rel="noopener" class="btn btn-outline btn-small">
                    Visit Site &rarr;
                </a>
            </div>
        `).join('');
    }

    // ============================================
    // HANDS-ON LABS
    // ============================================
    function renderLabs() {
        elements.labsGrid.innerHTML = CyberPathData.labs.map(lab => `
            <div class="lab-card">
                <div class="lab-header">
                    <h4>${lab.name}</h4>
                    <span class="lab-type">${lab.type}</span>
                </div>
                <div class="lab-body">
                    <p>${lab.description}</p>
                    <div class="lab-features">
                        ${lab.features.map(f => `<span class="lab-feature">${f}</span>`).join('')}
                    </div>
                    <div class="lab-pricing">
                        <span class="lab-price ${lab.free ? 'free' : 'paid'}">${lab.pricing}</span>
                        <a href="${lab.url}" target="_blank" rel="noopener" class="btn btn-primary btn-small">
                            Try It &rarr;
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // ============================================
    // ADDITIONAL RESOURCES
    // ============================================
    function renderResources() {
        const resources = CyberPathData.resources;

        elements.communityResources.innerHTML = renderResourceList(resources.communities);
        elements.newsResources.innerHTML = renderResourceList(resources.news);
        elements.toolResources.innerHTML = renderResourceList(resources.tools);
        elements.govResources.innerHTML = renderResourceList(resources.government);
    }

    function renderResourceList(items) {
        return items.map(item => `
            <li>
                <a href="${item.url}" target="_blank" rel="noopener">
                    ${item.name}
                </a>
            </li>
        `).join('');
    }

    // ============================================
    // PUBLIC API
    // ============================================
    window.CyberPath = {
        showCareerDetail,
        resetQuiz,
        closeModal
    };

    // ============================================
    // INITIALIZE ON DOM READY
    // ============================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
