import React, { useEffect, useState } from "react";
import { getUsersClassement } from "../../api/apiUsers";
import Card from "../../components/ui/Card/Card";
import RankingHeader from "../../components/ui/Ranking/RankingHeader";
import RankingTable from "../../components/ui/Ranking/RankingTable";
import styles from "./Classement.module.css";

const Classement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsersClassement();
      setUsers(data);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  if (loading) return <p className={styles.loading}>Chargement...</p>;

  return (
    <div className={styles.page}>
      <Card className={styles.card} variant="dark">
        <RankingHeader title="Classement" />
        <RankingTable players={users} />
      </Card>
    </div>
  );
};

export default Classement;
