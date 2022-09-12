import React from 'react';
import {useRouter} from 'next/router';

export default function LessonPage(){
    const router = useRouter();
    const {lesson} = router.query;
    
    return(
      <> A {lesson} </>
    )
}