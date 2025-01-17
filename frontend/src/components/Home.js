import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { ContentCard } from "./ContentCard";
import { BlogCard } from "./BlogCard";
import axios from 'axios';

export const Home = () => {

  const [blogs, setBlogs] = useState();

  const fetchData  = async () => {
    const fetchedData = await axios.get('/api/v1/blogs');
    return fetchedData.data;
  }

  useEffect(() => {
    let data;
    const fun = async () => {
      data = await fetchData();
      setBlogs(data.blogs)
    }
    fun();
  }, [])

  console.log(blogs);
  return (<>
    <Wrapper>

      <HeaderWrapper>
        <URContainer>Useful Resources</URContainer>
        <HeadingWrapper>Why should I use Flashcards for revision?</HeadingWrapper>
        <FlexRow>
          <FlexCol>
            <InnerHeadingWrapper>
              Published
            </InnerHeadingWrapper>
            <InnerHeadingWrapper>
            </InnerHeadingWrapper>

          </FlexCol>
          <FlexCol>
            <InnerHeadingWrapper>
              Read Time
            </InnerHeadingWrapper>
            <InnerHeadingWrapper>
            </InnerHeadingWrapper>
          </FlexCol>
        </FlexRow>
      </HeaderWrapper>

      <ContentCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
    </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  background-color: #E5ECF3;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const HeaderWrapper = styled.div`
  display: flex;
  margin-top:10px;
  flex-direction: column;
  align-items: left;
`

const HeadingWrapper = styled.div`
  font-weight:800;
  font-size:32px;
  color:#1E2026;
  line-height:38.4px;
`

const URContainer = styled.div`
  border:1px solid #C1CCD6;
  border-radius:20px;
  color:#7A8196;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight:500;
  padding: 4px 12px 4px 12px;
  margin:10px;
  width:158px;
  line-height: 18px;
  text-align: left;
  font-family:Bricolage Grotesque;

`

const InnerHeadingWrapper = styled.div`
  font-weight:600;
   margin:10px;
  font-family:Bricolage Grotesque;
  font-size:14px;
  color:#5B6170;
  line-height:16.8px;
`

const FlexRow = styled.div`
  display:flex;
  margin-top:12px;
  flex-direction: row;
`
const FlexCol = styled.div`
  display:flex;
  flex-direction:column;
`

// [
//   {
//     "title":"",
//     "Body":""
//   }
// ]