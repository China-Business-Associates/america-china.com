/**
 * China Business Associates (CBA) / America-China.com
 * Interactive Client-Side Features
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navbar State
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const expanded = navLinks.classList.contains('active');
      mobileToggle.setAttribute('aria-expanded', expanded);
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // 3. Product Filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      productCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(8px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // 4. Modal Window Controls
  const modalOverlay = document.getElementById('infoModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const modalClose = document.getElementById('modalClose');

  const openModal = (title, contentHtml) => {
    if (!modalOverlay) return;
    modalTitle.textContent = title;
    modalBody.innerHTML = contentHtml;
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  const isZh = document.documentElement.lang.startsWith('zh') || window.location.pathname.includes('zh');

  // Trigger: Letter from the President
  const readLetterBtn = document.getElementById('readPresidentLetterBtn');
  if (readLetterBtn) {
    readLetterBtn.addEventListener('click', () => {
      const fullLetterHtml = isZh ? `
        <div style="font-family: var(--font-serif); font-size: 1.0625rem; line-height: 1.85; color: var(--neutral-800);">
          <p><strong>尊敬的对华经贸与文化界朋友：</strong></p>
          <p>1972年，我踏上了前往中国的探索之旅。当时我作为斯里兰卡赴华公派留学的九名学生之一，与来自朝鲜、巴基斯坦、阿尔巴尼亚、越南及非洲各国的留学生一同在北京语言学院深造。我们唯一的共同语言是作为第二语言的英语。当时谁也未曾预料到，28年之后，大中华区会被国际商界公认为仅次于美、德、日之后的全球经济“第四极”。</p>
          <p>那些年，我深入中国各地参与工程技术研学实践，亲身经历了后文革时期的严苛规制与动荡环境。这对我以及我的许多中国挚友而言是一场深刻的历练与学徒期。我依然记得当年曾因思想开放而偶遭“思想不端”的温和批评。然而，正是那些难忘的岁月，构筑了我日后深刻理解中国、中国人民、现实需求、体制挑战及各级政府决策机制的核心框架。</p>
          <p>1975年，当我在西柏林及欧洲实地体验到西方现代市场经济及其带来的空前繁荣与富足时，对传统计划经济体制的迷思彻底消解。重返中国后，我愈发确信：我正身处正确的时间、正确的地点，并从事着完全正确的事业。1977年，当年在大学同窗共读的挚友们陆续走上了中央各部委与关键工业部门的领导岗位。我已完全具备条件将多年积累的知识、语言和人脉转化为双边经贸的务实动力。彼时涉足中国市场的美国企业急需建立联络渠道、解决现实难题、跟进商业线索。1980年，<strong>美中贸易联合公司（CHINA BUSINESS ASSOCIATES, 简称 CBA）</strong>正式创立，成为首家在中华人民共和国正式合法注册的美国常驻企业。</p>
          <p>CBA 是一支深具双重文化底蕴的跨国专业团队，服务于中美两国的企业与机构客户。我们在咨询服务、工业制造、渠道分销、专业服务及进出口等领域的业务开拓，赢得了卓越的行业信誉。我们在跨越文化鸿沟、化解与消除商业壁垒方面享有口皆碑的执行力。CBA 被中国企业界与政府部门公认为经得起时代考验的“老朋友”，同时也是一家始终超越客户期望的专业机构。</p>
          <p>中国在过去几十年的发展，以及未来的长期繁荣，本质上是西方先进管理体系、技术专长、资本力量与中国企业家开拓精神、广阔市场和丰富人才储备的深度结合。中国的快速发展步伐对这种融合有着强烈的刚性需求。对于立足长期全球战略的真正雄心勃勃的企业而言，这种巨大的历史机遇绝不可忽视。CBA 历经四十年沉淀的在华成熟政商网络，将助您化繁为简、从容应对在华运营挑战，并助力将中国市场纳入长期核心版图的远见企业实现持续盈利。</p>
          <div style="margin-top: 2rem; border-top: 1px solid var(--neutral-200); padding-top: 1.5rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
            <div>
              <p style="margin-bottom: 0.25rem;">此致，</p>
              <h4 style="font-size: 1.25rem; color: var(--primary-red); margin-bottom: 0.25rem;">拉贾·马加斯韦兰 (Raja Magasweran)</h4>
              <p style="font-size: 0.875rem; color: var(--neutral-600); font-family: var(--font-sans);">联合创始人兼董事总经理<br>美中贸易联合公司 (CBA) / America-China.com</p>
            </div>
            <div style="text-align: right; font-family: var(--font-sans); font-size: 0.8125rem; color: var(--neutral-500);">
              1980年首家在华正式注册的美国常驻企业
            </div>
          </div>
        </div>
      ` : `
        <div style="font-family: var(--font-serif); font-size: 1.0625rem; line-height: 1.8; color: var(--neutral-800);">
          <p><strong>Dear China Enthusiast,</strong></p>
          <p>In 1972, I left home for my adventure in China. I was one of a group of nine students from Sri Lanka who, along with our classmates from North Korea, Pakistan, Albania, North Vietnam, and Africa, were on scholarship at the language institute in Beijing. The only thing we had in common was English as a second language and the fact that none of us could have foreseen that 28 years later Greater China would be referred to as the Fourth Pole in the international business community after the US, Germany, and Japan.</p>
          <p>Years spent in technical work/study programs traveling through China, and experiencing the chafing regimentation and paranoia of the post Cultural Revolution period was an apprenticeship for my many Chinese friends and me. I recall the occasional, mild rebuke for being a "bad element." I was not alone. Yet those years became my framework for understanding China, its people, its needs, its obstacles, and its officialdom.</p>
          <p>Any lingering thoughts about the benefits of socialism and communism crumbled when I first experienced Western capitalism and its byproduct &mdash; abundance &mdash; in West Berlin and Europe in 1975. Upon my return to China, it became apparent that I was in the right place, at the right time, and doing the right thing. In 1977, my close student friends became senior officials in the various government ministries. I was in a position to convert the years of learning to earning. American companies in China needed contacts made, problems solved, and leads followed. In 1980, <strong>CHINA BUSINESS ASSOCIATES (CBA)</strong> became the first permanent American company registered in China.</p>
          <p>CBA is a bi-cultural force of business facilitators for both American and Chinese clients. Its activities in consulting, manufacturing, distribution, services, and import/export continue to earn a unique reputation for effectiveness and reliability in building and maintaining relationships that bridge cultures and avoid or clear away obstacles. CBA is recognized as a "good friend" for the long term by Chinese companies and authorities and an organization that consistently exceeds client expectations.</p>
          <p>China's economic development for the remainder of the decade and beyond will be a continuation of the convergence between Western management systems, technical expertise, and capital, and Chinese entrepreneurial energy, markets, and talent. China's needs and pace of development demand nothing less. The opportunities are such that no truly serious business can afford to ignore if it is committed to long-term global markets. CBA's mature China business network is available to make the challenges of navigating China's business environment easier and the result profitable for companies who see China as part of their long-term strategy.</p>
          <div style="margin-top: 2rem; border-top: 1px solid var(--neutral-200); padding-top: 1.5rem; display: flex; align-items: center; justify-content: space-between;">
            <div>
              <p style="margin-bottom: 0.25rem;">Sincerely,</p>
              <h4 style="font-size: 1.25rem; color: var(--primary-red); margin-bottom: 0.25rem;">Raja Magasweran</h4>
              <p style="font-size: 0.875rem; color: var(--neutral-600); font-family: var(--font-sans);">Managing Director &amp; Co-Founder<br>China Business Associates, Inc. / America-China.com</p>
            </div>
            <div style="text-align: right; font-family: var(--font-sans); font-size: 0.8125rem; color: var(--neutral-500);">
              First Permanent American Firm Registered in China (1980)
            </div>
          </div>
        </div>
      `;
      openModal(isZh ? '董事总经理历史致词' : 'Letter from the Managing Director', fullLetterHtml);
    });
  }

  // Trigger: Product Quick View Modals
  const productButtons = document.querySelectorAll('.product-detail-btn');
  productButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.product-card');
      const title = card.querySelector('.product-title').textContent;
      const category = card.querySelector('.product-category-tag').textContent;
      const specs = card.querySelector('.product-specs').textContent;
      const desc = card.querySelector('.product-desc').textContent;
      const imgSrc = card.querySelector('img').src;

      const complianceTitle = isZh ? '合规标准与质量认证：' : 'Compliance & Certifications:';
      const c1 = isZh ? 'GB7000-2005（中国质量认证中心 CQC 认证）' : 'GB7000-2005 (CQC China Quality Certification)';
      const c2 = isZh ? 'CSA（加拿大标准协会）安全认证' : 'CSA (Canadian Standards Association) Certified';
      const c3 = isZh ? 'ISO 9001 高可靠性工业制造质量管理体系' : 'ISO 9001 High-Reliability Manufacturing QA';
      const c4 = isZh ? '经多国重大市政与交通工程实地验证（瑞典、智利、中国等）' : 'Tested in International Field Projects (Sweden, Chile, China)';
      const ctaText = isZh ? '索取技术规格书与物料清单 (BOM)' : 'Request Technical Datasheet & BOM';
      const utronUrl = isZh ? 'https://u-tron.com/index-zh.html' : 'https://u-tron.com';
      const utronBtnText = isZh ? '访问制造基地 (u-tron.com) &nearr;' : 'Visit Manufacturer (u-tron.com) &nearr;';

      const detailHtml = `
        <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 2rem; align-items: start;">
          <div style="background: var(--neutral-100); border-radius: var(--radius-md); padding: 1.5rem; text-align: center;">
            <img src="${imgSrc}" alt="${title}" style="max-height: 240px; margin: 0 auto; object-fit: contain;">
          </div>
          <div>
            <span style="display: inline-block; background: var(--light-red); color: var(--primary-red); font-size: 0.75rem; font-weight: 700; padding: 0.25rem 0.625rem; border-radius: var(--radius-sm); text-transform: uppercase; margin-bottom: 0.5rem;">${category}</span>
            <h4 style="font-size: 1.375rem; color: var(--neutral-900); margin-bottom: 0.35rem;">${title}</h4>
            <p style="font-weight: 600; color: var(--primary-red); font-size: 0.875rem; margin-bottom: 1rem;">${specs}</p>
            <p style="font-size: 0.9375rem; color: var(--neutral-700); line-height: 1.6; margin-bottom: 1.25rem;">${desc}</p>
            <div style="background: var(--neutral-50); border: 1px solid var(--neutral-200); border-radius: var(--radius-md); padding: 1rem; font-size: 0.8125rem;">
              <strong style="color: var(--neutral-900);">${complianceTitle}</strong>
              <ul style="margin-top: 0.5rem; padding-left: 1.25rem; color: var(--neutral-600);">
                <li>${c1}</li>
                <li>${c2}</li>
                <li>${c3}</li>
                <li>${c4}</li>
              </ul>
            </div>
            <div style="margin-top: 1.25rem; display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
              <a href="#contact" onclick="document.getElementById('infoModal').classList.remove('active'); document.body.style.overflow='';" class="btn btn-primary btn-sm">${ctaText}</a>
              <a href="${utronUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-red btn-sm">${utronBtnText}</a>
            </div>
          </div>
        </div>
      `;
      openModal(title, detailHtml);
    });
  });

  // 5. Contact Form Submission
  const contactForm = document.getElementById('inquiryForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = isZh ? '正在发送咨询申请...' : 'Transmitting Inquiry...';
      submitBtn.disabled = true;

      setTimeout(() => {
        formStatus.className = 'form-status success';
        formStatus.textContent = isZh
          ? '感谢您联络美中贸易联合公司。您的咨询信息已即时转送至我们的旧金山与北京高管办公室。我们的资深顾问将在一个工作日内与您联系。'
          : 'Thank you for contacting China Business Associates. Your inquiry has been routed to our San Francisco and Beijing executive offices. Our senior advisor will respond within one business day.';
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 700);
    });
  }

  // 6. Navigation Active Link Highlighting on Scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset + 120;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');
      const navItem = document.querySelector(`.nav-links a[href*="${sectionId}"]`);
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        if (navItem) navItem.classList.add('active');
      } else {
        if (navItem) navItem.classList.remove('active');
      }
    });
  });
});
