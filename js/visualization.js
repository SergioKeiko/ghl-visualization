// Define colors for different stages and components
const colors = {
    lead: '#3b82f6',      // Blue
    qualified: '#10b981', // Green
    proposal: '#f59e0b',  // Amber
    closed: '#8b5cf6',    // Purple
    automation: '#ef4444' // Red
};

// Define the customer journey stages
const journeyStages = [
    {
        id: 'lead_entry',
        title: 'Lead Entry',
        icon: '📥',
        color: colors.lead,
        description: 'Client enters the GoHighLevel CRM system',
        details: [
            {
                title: 'Entry Points',
                content: [
                    'Referral partnerships (Construction associations, Business advisors)',
                    'Website form submissions',
                    'QR codes from networking events',
                    'Webinar registrations',
                    'LinkedIn campaign leads (via Zapier integration)',
                    'Manual entry for direct contacts'
                ]
            },
            {
                title: 'Automation Triggers',
                content: [
                    'Lead is automatically tagged based on source (e.g., Construction_Association, Webinar_HR_Strategy_2025)',
                    'Contact record created with all available information',
                    'Lead assigned to "New Leads" pipeline stage',
                    'Welcome email sent based on lead source',
                    'Task created for initial contact/qualification'
                ]
            }
        ]
    },
    {
        id: 'qualification',
        title: 'Lead Qualification',
        icon: '🔍',
        color: colors.qualified,
        description: 'Initial contact and qualification process',
        details: [
            {
                title: 'Qualification Process',
                content: [
                    'Calendly link sent for scheduling initial consultation',
                    'Zoom meeting automatically created when appointment booked',
                    'Meeting details sent to client with calendar invitation',
                    'Pre-meeting questionnaire sent to gather business information',
                    'Reminder emails/SMS sent before scheduled meeting'
                ]
            },
            {
                title: 'Qualification Automation',
                content: [
                    'Meeting notes captured in CRM after consultation',
                    'Lead moved to "Qualified Leads" stage after consultation',
                    'Lead scored based on fit and readiness',
                    'Task created for proposal preparation if qualified',
                    'Nurturing sequence initiated if not ready to proceed'
                ]
            }
        ]
    },
    {
        id: 'proposal',
        title: 'Proposal & Negotiation',
        icon: '📄',
        color: colors.proposal,
        description: 'Proposal creation, sending and negotiation',
        details: [
            {
                title: 'Proposal Process',
                content: [
                    'Dynamic proposal created from template in GoHighLevel',
                    'Client data automatically populated in proposal',
                    'Proposal sent digitally with e-signature capability',
                    'Tracking of proposal status (sent, opened, signed)',
                    'Automatic follow-up if proposal not viewed or signed',
                    'Lead moved to "In Progress" stage when proposal sent'
                ]
            },
            {
                title: 'Negotiation Handling',
                content: [
                    'Revisions tracked in CRM with version control',
                    'Client feedback captured in communication logs',
                    'Modified proposals generated with tracked changes',
                    'Approval workflow for significant modifications',
                    'Negotiation status updates sent to team members'
                ]
            }
        ]
    },
    {
        id: 'closing',
        title: 'Closing & Onboarding',
        icon: '✅',
        color: colors.closed,
        description: 'Contract signing, payment and project initiation',
        details: [
            {
                title: 'Closing Process',
                content: [
                    'Contract automatically generated for signature',
                    'Digital signature collected through GoHighLevel',
                    'Invoice generated and payment link sent',
                    'Receipt and thank you email sent upon payment',
                    'Lead moved to "Closed" stage after payment',
                    'Project kickoff meeting scheduled automatically'
                ]
            },
            {
                title: 'Client Onboarding',
                content: [
                    'Welcome kit sent to new client',
                    'Access provided to client portal if applicable',
                    'Client added to regular newsletter list',
                    'Project setup tasks created for internal team',
                    'Client satisfaction survey scheduled for 30 days',
                    'Future upsell/cross-sell sequences scheduled'
                ]
            }
        ]
    }
];

// Define automation touchpoints throughout the journey
const automationTouchpoints = [
    {
        id: 'auto_entry',
        stageId: 'lead_entry',
        title: 'Entry Automation',
        icon: '⚙️',
        color: colors.automation,
        content: [
            'Automatic tagging by lead source',
            'Welcome email sequence initiated',
            'Assignment to appropriate team member',
            'CRM record creation with contact details',
            'Initial task creation for follow-up'
        ]
    },
    {
        id: 'auto_qualification',
        stageId: 'qualification',
        title: 'Qualification Automation',
        icon: '⚙️',
        color: colors.automation,
        content: [
            'Calendly integration for scheduling',
            'Zoom meeting creation and link sending',
            'Pre-meeting questionnaire distribution',
            'Meeting reminders (email + SMS)',
            'Post-meeting follow-up sequence'
        ]
    },
    {
        id: 'auto_proposal',
        stageId: 'proposal',
        title: 'Proposal Automation',
        icon: '⚙️',
        color: colors.automation,
        content: [
            'Dynamic proposal generation',
            'Automatic data population in templates',
            'Proposal tracking and notifications',
            'Follow-up sequence if not signed',
            'Internal alerts for team members'
        ]
    },
    {
        id: 'auto_closing',
        stageId: 'closing',
        title: 'Closing Automation',
        icon: '⚙️',
        color: colors.automation,
        content: [
            'Contract generation and delivery',
            'Payment processing and receipts',
            'Welcome sequence initiation',
            'Project kickoff scheduling',
            'Client satisfaction monitoring'
        ]
    }
];

// Animation sequence showing a lead moving through the system
const animationSteps = [
    { stageId: null, description: "Click 'Start Animation' to see how a lead moves through your system" },
    { stageId: 'lead_entry', description: "A new lead enters your system from a referral partner" },
    { stageId: 'lead_entry', description: "The lead is automatically tagged and a welcome email is sent" },
    { stageId: 'auto_entry', description: "Automation creates a task for initial contact" },
    { stageId: 'qualification', description: "You reach out and the lead books a consultation via Calendly" },
    { stageId: 'auto_qualification', description: "Zoom meeting is automatically created and details sent" },
    { stageId: 'qualification', description: "After the consultation, the lead is qualified and ready for a proposal" },
    { stageId: 'proposal', description: "A custom proposal is generated from your template" },
    { stageId: 'auto_proposal', description: "Proposal is sent with automatic tracking" },
    { stageId: 'proposal', description: "The client reviews the proposal and requests minor changes" },
    { stageId: 'proposal', description: "You update the proposal and send the revised version" },
    { stageId: 'closing', description: "The client approves and signs the contract" },
    { stageId: 'auto_closing', description: "Payment link is automatically sent and processed" },
    { stageId: 'closing', description: "Project kickoff meeting is scheduled automatically" },
    { stageId: 'closing', description: "Client is now in your system as an active client" },
    { stageId: null, description: "The journey is complete! The client is now in your system and project work begins" }
];

// Global state
let activeStage = null;
let showDetails = false;
let animationPlaying = false;
let currentAnimationStep = 0;
let animationInterval = null;

// DOM Elements
const journeyVisualizationEl = document.getElementById('journey-visualization');
const stageDetailsEl = document.getElementById('stage-details');
const stageDetailsTitleEl = document.getElementById('stage-details-title');
const automationDetailsEl = document.getElementById('automation-details');
const automationTitleEl = document.getElementById('automation-title');
const startAnimationBtn = document.getElementById('start-animation');
const animationStatusEl = document.getElementById('animation-status');
const animationStepDescriptionEl = document.getElementById('animation-step-description');
const animationProgressEl = document.getElementById('animation-progress');

// Initialize the visualization
function initVisualization() {
    renderStages();
    setupEventListeners();
}

// Render the journey stages
function renderStages() {
    journeyVisualizationEl.innerHTML = '';
    
    journeyStages.forEach((stage, index) => {
        // Create stage box
        const stageBox = document.createElement('div');
        stageBox.className = `stage-box flex flex-col items-center p-4 rounded-lg shadow-md transition-all w-64 bg-white`;
        stageBox.id = `stage-${stage.id}`;
        stageBox.style.borderLeft = `4px solid ${stage.color}`;
        stageBox.dataset.stageId = stage.id;
        
        stageBox.innerHTML = `
            <div class="text-3xl mb-2">${stage.icon}</div>
            <h3 class="font-bold text-lg text-center">${stage.title}</h3>
            <p class="text-gray-600 text-sm text-center mt-1">${stage.description}</p>
            <div class="absolute top-0 left-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" 
                 style="background-color: ${stage.color}; margin-top: -10px; margin-left: -10px;">
                ${index + 1}
            </div>
        `;
        
        journeyVisualizationEl.appendChild(stageBox);
        
        // Add connector arrow if not the last stage
        if (index < journeyStages.length - 1) {
            const connector = document.createElement('div');
            connector.className = 'connector hidden md:flex items-center justify-center w-12 mx-2';
            connector.innerHTML = `
                <svg width="50" height="24" viewBox="0 0 50 24">
                    <path d="M2 12 H 48 L 38 4 M 48 12 L 38 20" 
                          fill="none" 
                          stroke="#d1d5db" 
                          stroke-width="2"
                          stroke-linecap="round"
                          class="connector-path"
                          id="connector-${index}">
                    </path>
                </svg>
            `;
            journeyVisualizationEl.appendChild(connector);
        }
    });
}

// Setup event listeners
function setupEventListeners() {
    // Stage click events
    document.querySelectorAll('.stage-box').forEach(stageBox => {
        stageBox.addEventListener('click', () => {
            if (animationPlaying) return;
            
            const stageId = stageBox.dataset.stageId;
            
            if (activeStage === stageId) {
                // Deactivate if already active
                stageBox.classList.remove('active');
                stageBox.style.transform = 'scale(1)';
                activeStage = null;
                showDetails = false;
                
                // Hide details and automation sections
                stageDetailsEl.innerHTML = '';
                stageDetailsTitleEl.classList.add('hidden');
                automationDetailsEl.innerHTML = '';
                automationTitleEl.classList.add('hidden');
            } else {
                // Deactivate previous active stage
                document.querySelectorAll('.stage-box').forEach(sb => {
                    sb.classList.remove('active');
                    sb.style.transform = 'scale(1)';
                });
                
                // Activate new stage
                stageBox.classList.add('active');
                stageBox.style.transform = 'scale(1.05)';
                activeStage = stageId;
                showDetails = true;
                
                // Show details and automation
                renderStageDetails();
                renderAutomationTouchpoints();
            }
        });
    });
    
    // Animation button
    startAnimationBtn.addEventListener('click', startAnimation);
}

// Render details for the active stage
function renderStageDetails() {
    if (!activeStage || !showDetails) {
        stageDetailsEl.innerHTML = '';
        stageDetailsTitleEl.classList.add('hidden');
        return;
    }
    
    const stage = journeyStages.find(s => s.id === activeStage);
    if (!stage) return;
    
    stageDetailsTitleEl.classList.remove('hidden');
    stageDetailsEl.innerHTML = '';
    
    stage.details.forEach(detail => {
        const detailSection = document.createElement('div');
        detailSection.className = 'p-4 rounded-lg shadow-md bg-white mb-4';
        detailSection.style.borderLeft = `4px solid ${stage.color}`;
        
        let contentHTML = '';
        detail.content.forEach(item => {
            contentHTML += `
                <li class="flex items-start text-sm mb-2">
                    <span class="text-green-500 mr-2">✓</span>
                    <span>${item}</span>
                </li>
            `;
        });
        
        detailSection.innerHTML = `
            <h3 class="font-bold mb-3">${detail.title}</h3>
            <ul class="space-y-2">
                ${contentHTML}
            </ul>
        `;
        
        stageDetailsEl.appendChild(detailSection);
    });
}

// Render automation touchpoints for the active stage
function renderAutomationTouchpoints() {
    if (!activeStage) {
        automationDetailsEl.innerHTML = '';
        automationTitleEl.classList.add('hidden');
        return;
    }
    
    const relevantTouchpoint = automationTouchpoints.find(tp => tp.stageId === activeStage);
    
    if (!relevantTouchpoint) {
        automationDetailsEl.innerHTML = '';
        automationTitleEl.classList.add('hidden');
        return;
    }
    
    automationTitleEl.classList.remove('hidden');
    
    let contentHTML = '';
    relevantTouchpoint.content.forEach(item => {
        contentHTML += `
            <li class="flex items-start text-sm mb-2">
                <span class="text-red-500 mr-2">•</span>
                <span>${item}</span>
            </li>
        `;
    });
    
    automationDetailsEl.innerHTML = `
        <div class="p-4 rounded-lg shadow-md bg-white" style="border-left: 4px solid ${relevantTouchpoint.color}">
            <div class="flex items-center mb-3">
                <span class="text-xl mr-2">${relevantTouchpoint.icon}</span>
                <h3 class="font-bold">${relevantTouchpoint.title}</h3>
            </div>
            <ul class="space-y-1">
                ${contentHTML}
            </ul>
        </div>
    `;
}

// Start the animation sequence
function startAnimation() {
    if (animationPlaying) return;
    
    animationPlaying = true;
    currentAnimationStep = 1;
    
    // Reset UI
    document.querySelectorAll('.stage-box').forEach(sb => {
        sb.classList.remove('active');
        sb.style.transform = 'scale(1)';
    });
    
    document.querySelectorAll('.connector-path').forEach(path => {
        path.setAttribute('stroke', '#d1d5db');
    });
    
    stageDetailsEl.innerHTML = '';
    stageDetailsTitleEl.classList.add('hidden');
    automationDetailsEl.innerHTML = '';
    automationTitleEl.classList.add('hidden');
    
    // Show animation status
    animationStatusEl.classList.remove('hidden');
    startAnimationBtn.textContent = 'Animation Playing...';
    startAnimationBtn.classList.add('bg-gray-300', 'text-gray-600', 'cursor-not-allowed');
    startAnimationBtn.classList.remove('bg-blue-600', 'hover:bg-blue-700', 'text-white');
    
    // Start animation
    updateAnimationStep(1);
    
    let step = 1;
    animationInterval = setInterval(() => {
        step += 1;
        if (step >= animationSteps.length) {
            clearInterval(animationInterval);
            setTimeout(() => {
                endAnimation();
            }, 3000);
        } else {
            updateAnimationStep(step);
        }
    }, 3000); // 3 seconds per step
}

// Update the current animation step
function updateAnimationStep(step) {
    currentAnimationStep = step;
    const currentStep = animationSteps[step];
    
    // Update description and progress
    animationStepDescriptionEl.textContent = currentStep.description;
    const progressPercentage = (step / (animationSteps.length - 1)) * 100;
    animationProgressEl.style.width = `${progressPercentage}%`;
    
    // Update active stage
    if (currentStep.stageId) {
        activeStage = currentStep.stageId;
        
        // Deactivate all stages first
        document.querySelectorAll('.stage-box').forEach(sb => {
            sb.classList.remove('active');
            sb.style.transform = 'scale(1)';
        });
        
        // Activate current stage
        const activeStageEl = document.querySelector(`.stage-box[data-stage-id="${activeStage}"]`);
        if (activeStageEl) {
            activeStageEl.classList.add('active');
            activeStageEl.style.transform = 'scale(1.05)';
        }
        
        // Update connector colors
        document.querySelectorAll('.connector-path').forEach((path, index) => {
            const journeyIndex = journeyStages.findIndex(s => s.id === activeStage);
            
            if (index < journeyIndex) {
                path.setAttribute('stroke', '#10b981'); // Green for completed connections
            } else {
                path.setAttribute('stroke', '#d1d5db'); // Gray for upcoming connections
            }
        });
    }
}

// End animation and reset UI
function endAnimation() {
    animationPlaying = false;
    currentAnimationStep = 0;
    activeStage = null;
    
    // Reset UI
    document.querySelectorAll('.stage-box').forEach(sb => {
        sb.classList.remove('active');
        sb.style.transform = 'scale(1)';
    });
    
    document.querySelectorAll('.connector-path').forEach(path => {
        path.setAttribute('stroke', '#d1d5db');
    });
    
    animationStatusEl.classList.add('hidden');
    startAnimationBtn.textContent = 'Start Animation';
    startAnimationBtn.classList.remove('bg-gray-300', 'text-gray-600', 'cursor-not-allowed');
    startAnimationBtn.classList.add('bg-blue-600', 'hover:bg-blue-700', 'text-white');
    
    stageDetailsEl.innerHTML = '';
    stageDetailsTitleEl.classList.add('hidden');
    automationDetailsEl.innerHTML = '';
    automationTitleEl.classList.add('hidden');
}

// Initialize visualization when DOM is loaded
document.addEventListener('DOMContentLoaded', initVisualization);
