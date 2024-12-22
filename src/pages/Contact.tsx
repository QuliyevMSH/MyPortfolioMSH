import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, User } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be implemented later
    console.log("Form submitted");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Əlaqə</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mənimlə əlaqə saxlamaq üçün aşağıdakı məlumatlardan istifadə edə bilərsiniz
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5 text-gray-500" />
                  <span>
                  Maşallah Quliyev
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-500" />
                  <a href="mailto:masallahquliyev78@gmail.com?subject=Subject&body=Message" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">
                  masallahquliyev78@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-500" />
                  <a href="https://wa.me/994506847834?text=Salam%2C%20QuliyevMSH." target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">+994 50 684 78 34</a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gray-500" />
                  <span>Sumqayıt, Azərbaycan</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Github className="h-5 w-5 text-gray-500" />
                  <a href="https://github.com/QuliyevMSH" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">
                github.com/QuliyevMSH
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="h-5 w-5 text-gray-500" />
                  <a href="https://www.linkedin.com/in/quliyevmsh-undefined-a18a54335" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">
                  linkedin.com/in/quliyevmsh
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;