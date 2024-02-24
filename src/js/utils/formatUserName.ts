export const formatUserName = (user: any) => {
    if (!user) return "";
    return user?.firstName && user?.lastName ? `${user.firstName} ${user.firstName}` : user?.username || "";
};
