import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import TilesList from './TilesList';
import * as Query from './gqlQueries';
import * as CommonStyles from './commonStyles';
import { useQuery } from '@apollo/client';

const SkillsList = (props: {title: string}) => {
    const {loading, error, data} = useQuery(Query.SKILLS)
    if (loading) return <Text style={CommonStyles.loadingMsg}>Loading...</Text>;
    if (error) return <Text style={CommonStyles.errorMsg}>Error: {error.message}</Text>;

    return (
        <View style={styles.list}>
            <View style={styles.listContent}>
                <Text h3 style={styles.listTitle}>{props.title}</Text>
                <TilesList
                    data={data.skills}
                />
            </View>
        </View>
    );
};
  
  const styles = StyleSheet.create({
    list:{
        flexDirection:'column',
        flex:1,
        alignItems:'stretch',
        paddingHorizontal:'3%',
    },
    listTitle:{
        marginHorizontal: '4%',
    },
    listContent:{
        justifyContent:'space-between',
    },
  });
  
export default SkillsList;