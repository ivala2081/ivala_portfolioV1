import { Card } from './ui/card';
import { Badge } from './ui/badge';

const education = {
  institution: "Yildiz Technical University",
  degree: "Civil Engineering",
  note: "100% English"
};

const certificates = [
  {
    name: "Python for Data Science and AI",
    issuer: "IBM"
  },
  {
    name: "Technical Support Fundamentals",
    issuer: "Google"
  },
  {
    name: "FundedNext Elite Trader Certificate",
    issuer: "FundedNext"
  }
];

const languages = [
  { lang: 'English', level: 'Business' },
  { lang: 'Turkish', level: 'Native' },
  { lang: 'Persian', level: 'Native' },
  { lang: 'Azerbaijani', level: 'Native' }
];

export function EducationCertifications() {
  return (
    <div className="space-y-6">
      {/* Education */}
      <Card className="bg-gray-900 border-gray-700">
        <div className="p-6">
          <h3 className="text-lg text-white font-mono mb-4">EDUCATION</h3>
          
          <div className="bg-gray-800 p-4 rounded border border-gray-700">
            <h4 className="text-white font-mono">{education.degree}</h4>
            <p className="text-gray-300 font-mono text-sm">{education.institution}</p>
            <Badge className="mt-2 bg-gray-700 text-gray-300 font-mono border-gray-600">
              {education.note}
            </Badge>
          </div>
        </div>
      </Card>

      {/* Certifications */}
      <Card className="bg-gray-900 border-gray-700">
        <div className="p-6">
          <h3 className="text-lg text-white font-mono mb-4">CERTIFICATIONS</h3>
          
          <div className="space-y-3">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded border border-gray-700">
                <h4 className="text-white font-mono text-sm">{cert.name}</h4>
                <p className="text-gray-400 font-mono text-xs">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Languages */}
      <Card className="bg-gray-900 border-gray-700">
        <div className="p-6">
          <h3 className="text-lg text-white font-mono mb-4">LANGUAGES</h3>
          
          <div className="grid grid-cols-2 gap-3">
            {languages.map((lang, index) => (
              <div key={index} className="bg-gray-800 p-3 rounded border border-gray-700">
                <div className="text-white font-mono text-sm">{lang.lang}</div>
                <div className="text-gray-400 font-mono text-xs">{lang.level}</div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}