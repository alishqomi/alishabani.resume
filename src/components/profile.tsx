
const PersonalInfo = () => {
  return (
    <section className="bg-white shadow-md rounded-xl p-6 mt-6">
      <h2 className="text-2xl font-semibold mb-4">اطلاعات شخصی</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <p><span className="font-semibold">جنسیت:</span> مرد</p>
        <p><span className="font-semibold">وضعیت تاهل:</span> مجرد</p>
        <p><span className="font-semibold">نظام وظیفه:</span> انجام شده</p>
        <p><span className="font-semibold">تاریخ تولد:</span> ۱۳۷۹/۰۴/۲۳</p>
        <p><span className="font-semibold">حقوق درخواستی:</span> ۲۰ - ۲۵ میلیون تومان</p>
      </div>
    </section>
  );
};

export default PersonalInfo;
