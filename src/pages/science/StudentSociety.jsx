import React from 'react';
import { useTranslation } from 'react-i18next';

const StudentSociety = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">Студенческое научное общество</h1>
            <p className="text-xl text-gray-200">
              Общественная организация для студентов, проявляющих интерес к научно-исследовательской работе
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">

          {/* Document Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-3">
              ПОЛОЖЕНИЕ О СТУДЕНЧЕСКОМ НАУЧНОМ ОБЩЕСТВЕ
            </h2>

            {/* Общие положения */}
            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Общие положения</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">Сокращения:</h4>
                <ul className="list-none space-y-2 text-gray-700">
                  <li><strong>СНО</strong> – Студенческое научное общество</li>
                  <li><strong>СМУ</strong> – Совет молодых ученых</li>
                  <li><strong>НИРС</strong> – Научно – исследовательская работа Студентов</li>
                </ul>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div>
                  <p className="font-semibold mb-2">1.1</p>
                  <p>
                    Студенческое научное общество Учреждения «Салымбеков Университет» (далее – СНО) – 
                    общественная организация, объединяющая на добровольных началах студентов Университета, 
                    проявляющих склонность к научно-организационной и исследовательской работе, активно 
                    участвующих в научно-организационной и исследовательской работе, членов студенческих 
                    научных кружков кафедр.
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-2">1.2</p>
                  <p>
                    Членом СНО имеет право быть любой студент Университета, занимающийся научно-исследовательской 
                    работой в составе научного кружка (семинара, рабочей группы и т.п.) или индивидуально 
                    участвующий в подготовке докладов, рефератов, сообщений, проведении научных исследований.
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-2">1.3</p>
                  <p>
                    Деятельность СНО курируется Советом молодых ученых (СМУ) Университета и строит свою работу 
                    во взаимодействии с Советом по НИРС Университета, заместителями деканов факультетов по науке 
                    и кафедрами и другими структурными подразделениями Университета.
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-2">1.4</p>
                  <p>
                    СНО осуществляет свою деятельность в соответствии с законодательством Кыргызской Республики, 
                    Уставом Университета, приказами ректора, проректоров, распоряжениями СМУ, настоящим Положением 
                    и принятым в соответствии с ним документами.
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-2">1.5</p>
                  <p>
                    СНО осуществляет свою деятельность на принципах самоуправления, открытого характера деятельности, 
                    добровольности, равноправия, законности духа взаимного уважения и культуры научного общения студентов.
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-2">1.6</p>
                  <p>
                    СНО в соответствии с настоящим Положением может вступать в международные общественные объединения, 
                    приобретать права и нести обязанности, соответствующие статусу этих международных общественных 
                    объединений, поддерживать международные контакты и связи, заключать соглашения с иностранными 
                    некоммерческими неправительственными образовательными и научными объединениями, зарубежными 
                    учебными заведениями и научными учреждениями.
                  </p>
                </div>
              </div>
            </section>

            {/* Состав */}
            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                Состав Студенческого научного общества:
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: 'Hamza Muhammad', group: 'GM-1-19' },
                  { name: 'Mahnoor', group: 'GM-1-19' },
                  { name: 'Ali Muhammad', group: 'GM-2-19' },
                  { name: 'Iqbal Muhammad Ahmad', group: 'GM-2-19' },
                  { name: 'Hamza Muhammad', group: 'GM-4-19' },
                  { name: 'Haider Muhammad Safeer', group: 'GM-4-19' },
                  { name: 'Khan Saqibullah', group: 'GM-5-19' },
                  { name: 'Umer Muhammad', group: 'GM-7-19' },
                  { name: 'But Sohira Naz', group: 'GM-7-19' },
                  { name: 'Hussain Naveed', group: 'GM-8-19' },
                  { name: 'Muhammad Ilyas', group: 'GM-9-19' },
                  { name: 'Wajeeh-ul-Hassan', group: 'GM-10-19' },
                  { name: 'Khan Ibragim', group: 'GM-11-19' },
                  { name: 'Durraiz Md', group: 'GM-1-20' },
                  { name: 'Arif Md Abdullah', group: 'GM-2-20' },
                  { name: 'Shehzad Md Hussnain', group: 'GM-3-20' },
                  { name: 'Waqar Alam', group: 'GM-5-20' },
                  { name: 'Faisal Khan', group: 'GM-6-20' },
                  { name: 'Sheraz Ali', group: 'GM-7-20' },
                  { name: 'Muhammad Waqar', group: 'GM-8-20' },
                ].map((member, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <p className="font-semibold text-gray-800">{member.name}</p>
                    <p className="text-sm text-blue-600">{member.group}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Download Link */}
            <section className="mt-8 pt-6 border-t border-gray-200">
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                  />
                </svg>
                Положение о студенческом научном обществе
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSociety;
