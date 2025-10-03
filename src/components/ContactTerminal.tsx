import { Card } from './ui/card';

const contactInfo = [
  { label: 'Email', value: 'H.alavi1394@gmail.com', type: 'email' },
  { label: 'Phone', value: '+90 (535) 225 49 71', type: 'tel' },
  { label: 'LinkedIn', value: 'www.linkedin.com/in/ivala', type: 'url' },
  { label: 'GitHub', value: 'www.github.com/ivala2081', type: 'url' },
  { label: 'Location', value: 'Beylikduzu, Istanbul, Turkey', type: 'text' }
];

const hobbies = [
  'Electro Guitar',
  'Snooker', 
  'Basketball',
  'Horses',
  'Sculpturing',
  'Exhibitions'
];

export function ContactTerminal() {
  return (
    <div className="space-y-6">
      {/* Contact Information */}
      <Card className="bg-gray-900 border-gray-700">
        <div className="p-6">
          <h3 className="text-lg text-white font-mono mb-6">CONTACT INFORMATION</h3>
          
          <div className="space-y-4">
            {contactInfo.map((contact, index) => (
              <div key={index} className="flex justify-between items-center bg-gray-800 p-4 rounded border border-gray-700">
                <span className="text-gray-300 font-mono text-sm">{contact.label}</span>
                {contact.type === 'url' ? (
                  <a 
                    href={`https://${contact.value}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-mono text-sm transition-colors"
                  >
                    {contact.value}
                  </a>
                ) : contact.type === 'email' ? (
                  <a 
                    href={`mailto:${contact.value}`}
                    className="text-blue-400 hover:text-blue-300 font-mono text-sm transition-colors"
                  >
                    {contact.value}
                  </a>
                ) : contact.type === 'tel' ? (
                  <a 
                    href={`tel:${contact.value}`}
                    className="text-blue-400 hover:text-blue-300 font-mono text-sm transition-colors"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <span className="text-white font-mono text-sm">{contact.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Interests */}
      <Card className="bg-gray-900 border-gray-700">
        <div className="p-6">
          <h3 className="text-lg text-white font-mono mb-6">INTERESTS</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {hobbies.map((hobby, index) => (
              <div key={index} className="bg-gray-800 p-3 rounded border border-gray-700 text-center">
                <div className="text-gray-300 font-mono text-sm">{hobby}</div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Soft Skills */}
      <Card className="bg-gray-900 border-gray-700">
        <div className="p-6">
          <h3 className="text-lg text-white font-mono mb-6">CORE COMPETENCIES</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="text-gray-300 font-mono text-sm">Leadership & Management</h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Critical Thinking & Problem Solving</li>
                <li>• Leadership & Team Management</li>
                <li>• Client Relationship Management</li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-gray-300 font-mono text-sm">Professional Skills</h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Adaptability & Continuous Improvement</li>
                <li>• Cross-functional Project Leadership</li>
                <li>• Strategic Decision Making</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}