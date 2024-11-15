import { recentActivities } from "../../constans";
import Title from "../Title/Title";
import { motion } from "framer-motion";
import { CheckCircleOutlined, MinusCircleOutlined } from '@ant-design/icons'; // Ant Design icons for status

const Aktivitas = ({ variants }) => {
    // Function to determine the status color and icon
    const getStatusIndicator = (activity) => {
        switch (activity) {
            case 'Logged In':
                return { color: 'text-green-500', icon: <CheckCircleOutlined /> };
            case 'Made a Purchase':
                return { color: 'text-yellow-500', icon: <CheckCircleOutlined /> };
            case 'Updated Profile':
                return { color: 'text-blue-500', icon: <CheckCircleOutlined /> };
            case 'Logged Out':
                return { color: 'text-red-500', icon: <MinusCircleOutlined /> };
            default:
                return { color: 'text-gray-500', icon: <MinusCircleOutlined /> };
        }
    };

    return (
        <motion.div
            variants={variants}
            className="rounded-xl bg-white p-5 dark:bg-slate-600 dark:text-slate-300 xl:w-[400px]"
        >
            <Title>Aktivitas Pengguna</Title>

            <ul className="space-y-4">
                {recentActivities.map((activity) => {
                    const status = getStatusIndicator(activity.activity);
                    return (
                        <motion.li
                            key={activity.id}
                            className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <img
                                src={activity.img}
                                alt={activity.name}
                                className="h-10 w-10 rounded-full border-2 border-cyan-600"
                            />
                            <div className="flex-1">
                                <h3 className="font-medium text-slate-700 dark:text-slate-200">{activity.name}</h3>
                                <p className="text-sm text-slate-400 flex items-center gap-2">
                                    <span className={status.color}>{status.icon}</span> {activity.activity}
                                </p>
                            </div>
                        </motion.li>
                    );
                })}
            </ul>
        </motion.div>
    );
};

export default Aktivitas;
