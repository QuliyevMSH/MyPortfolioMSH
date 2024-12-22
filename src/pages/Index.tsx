import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center p-2 bg-purple-100 rounded-full mb-8">
            <span className="text-sm font-medium text-purple-800">
            Web Developer
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Salam, Xoş Gəlmisiniz!
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Mən web developerəm. Müasir texnologiyalarla funksional və estetik
            veb saytlar yaradıram. Məqsədim yalnız kod yazmaq deyil, həm də
            müştərilərimə dəyərli istifadəçi təcrübəsi təqdim etməkdir.
            Proqramlaşdırmanı sənətə çevirərək, layihələri ideal nəticəyə
            çatdırmaq üçün çalışıram. Hər layihəyə xüsusi diqqətlə yanaşıram və
            daim yenilikləri öyrənərək inkişaf edirəm.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 transition-colors"
            >
              Layihələrim
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Əlaqə
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
