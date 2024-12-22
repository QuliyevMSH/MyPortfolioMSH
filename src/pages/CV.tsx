import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CV = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">CV</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Təhsil və iş təcrübəm haqqında məlumat
          </p>
        </div>
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Təhsil</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Sumqayıt Dövlət Universiteti</h3>
                  <p className="text-gray-600">Riyaziyyat və İnformatika Müəllimi, Bakalavr</p>
                  <p className="text-sm text-gray-500">2020 - (Hələ də tələbəyəm)</p>
                </div>
                <div>
                  <h3 className="font-semibold">Code Academy</h3>
                  <p className="text-gray-600">Full Stack Web Development</p>
                  <p className="text-gray-600">Alındı: Diplom və Sertifikat</p>
                  <p className="text-sm text-gray-500">2024</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>İş Təcrübəsi</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Junior Frontend Developer</h3>
                  <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>React ilə müasir web tətbiqlərin hazırlanması</li>
                    <li>İstəyə uyğun dizayn və funksionallıq</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Frontend Developer</h3>
                  <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>Müştəri layihələrinin hazırlanması</li>
                    <li>UI/UX dizayn implementasiyası</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bacarıqlarım</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="font-semibold">Frontend</h3>
                  <ul className="text-gray-600">
                    <li>React</li>
                    <li>Html</li>
                    <li>Scss\Css</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Backend</h3>
                  <ul className="text-gray-600">
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>Bcryptjs</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default CV;