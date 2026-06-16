"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, ThumbsUp, UserRound } from "lucide-react";
import { socialComments } from "@/data/comments";
import { siteConfig } from "@/data/site";

const avatarColors = [
  "bg-red-500", "bg-orange-500", "bg-amber-500", "bg-green-500", 
  "bg-emerald-500", "bg-teal-500", "bg-cyan-500", "bg-blue-500", 
  "bg-indigo-500", "bg-violet-500", "bg-purple-500", "bg-fuchsia-500", 
  "bg-pink-500", "bg-rose-500"
];

function getAvatarColor(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return avatarColors[Math.abs(hash) % avatarColors.length];
}

function formatTimeAgo(days: number) {
  if (days <= 1) return `Hôm qua`;
  if (days <= 3) return `${days} ngày trước`;
  
  // For older than 3 days, show an exact date (e.g. "12 tháng 6")
  const date = new Date();
  date.setDate(date.getDate() - days);
  
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day} tháng ${month}, ${year}`;
}

export function SocialCommentsSection() {
  const [visibleCount, setVisibleCount] = useState(5);
  const [shuffledComments, setShuffledComments] = useState<typeof socialComments>([]);

  useEffect(() => {
    // 1. Shuffle comments randomly
    const shuffled = [...socialComments].sort(() => Math.random() - 0.5);
    
    // 2. Generate dynamic times spread over days
    let currentDaysAgo = Math.floor(Math.random() * 2) + 1; // 1 to 2 days ago
    
    const dynamicComments = shuffled.map((c) => {
      const timeStr = formatTimeAgo(currentDaysAgo);
      
      let newReplies = c.replies;
      if (newReplies) {
        newReplies = newReplies.map((r) => {
           // Reply happens AFTER the comment, so it is MORE RECENT (fewer days ago)
           // But ensure it's at least 1 day ago (Hôm qua)
           const replyDaysAgo = Math.max(1, currentDaysAgo - Math.floor(Math.random() * 2));
           return { ...r, time: formatTimeAgo(replyDaysAgo) };
        });
      }
      
      // The next comment downwards should be significantly older (1 to 4 days older)
      currentDaysAgo += Math.floor(Math.random() * 4) + 1;
      
      return { ...c, time: timeStr, replies: newReplies };
    });
    
    setShuffledComments(dynamicComments);
  }, []);

  if (shuffledComments.length === 0) {
    return (
      <div className="border-y border-slate-200 sm:border bg-white shadow-sm sm:rounded-2xl overflow-hidden animate-pulse">
        <div className="h-[400px] bg-slate-50/50"></div>
      </div>
    );
  }

  const visibleComments = shuffledComments.slice(0, visibleCount);
  const hasMore = visibleCount < shuffledComments.length;

  return (
    <div className="border-y border-slate-200 sm:border bg-white shadow-sm sm:rounded-2xl overflow-hidden">
      <div className="divide-y divide-slate-100">
        {visibleComments.map((comment, idx) => {
          const avatarBg = comment.isAdmin ? "bg-[var(--color-navy-900)]" : getAvatarColor(comment.name);
          return (
            <div key={idx} className="p-4 sm:p-5">
              <div className="flex gap-3">
                <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-bold text-white shadow-sm ${avatarBg}`}>
                  {comment.isAdmin ? "VP" : comment.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="inline-block rounded-2xl bg-slate-100 px-4 py-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-[13px] text-[#050505]">{comment.name}</span>
                      {comment.isAdmin && (
                        <CheckCircle2 size={13} className="text-[var(--color-gold-500)]" fill="currentColor" />
                      )}
                    </div>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-[#050505]">{comment.text}</p>
                  </div>
                  <div className="mt-1.5 flex items-center gap-4 px-3 text-[12px] font-semibold text-[#65676b]">
                    <span className="cursor-pointer hover:underline">Thích</span>
                    <span className="cursor-pointer hover:underline">Phản hồi</span>
                    <span className="font-normal">{comment.time}</span>
                    {comment.likes && (
                      <div className="ml-auto flex items-center gap-1 rounded-full bg-white px-1.5 py-0.5 shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                        <div className="grid h-4 w-4 place-items-center rounded-full bg-[linear-gradient(135deg,#00aaff,#0077ff)] text-white">
                          <ThumbsUp size={8} fill="currentColor" />
                        </div>
                        <span className="text-[11px] font-normal">{comment.likes}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* Replies */}
              {comment.replies && comment.replies.length > 0 && (
                <div className="mt-3 ml-12 space-y-3">
                  {comment.replies.map((reply, rIdx) => {
                    const rAvatarBg = reply.isAdmin ? "bg-[var(--color-navy-900)]" : getAvatarColor(reply.name);
                    return (
                      <div key={rIdx} className="flex gap-3">
                        <div className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs font-bold text-white shadow-sm ${rAvatarBg}`}>
                          {reply.isAdmin ? "VP" : reply.name.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <div className="inline-block rounded-2xl bg-slate-100 px-4 py-2.5">
                            <div className="flex items-center gap-1.5">
                              <span className="font-bold text-[13px] text-[#050505]">{reply.name}</span>
                              {reply.isAdmin && (
                                <CheckCircle2 size={13} className="text-[var(--color-gold-500)]" fill="currentColor" />
                              )}
                            </div>
                            <p className="mt-0.5 text-[13px] leading-relaxed text-[#050505]">{reply.text}</p>
                          </div>
                          <div className="mt-1.5 flex items-center gap-4 px-3 text-[12px] font-semibold text-[#65676b]">
                            <span className="cursor-pointer hover:underline">Thích</span>
                            <span className="cursor-pointer hover:underline">Phản hồi</span>
                            <span className="font-normal">{reply.time}</span>
                            {reply.likes && (
                              <div className="ml-auto flex items-center gap-1 rounded-full bg-white px-1.5 py-0.5 shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                                <div className="grid h-4 w-4 place-items-center rounded-full bg-[linear-gradient(135deg,#00aaff,#0077ff)] text-white">
                                  <ThumbsUp size={8} fill="currentColor" />
                                </div>
                                <span className="text-[11px] font-normal">{reply.likes}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      {hasMore && (
        <div className="p-4 border-t border-slate-100 bg-white text-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 5)}
            className="inline-flex items-center justify-center font-bold text-[13px] text-[#65676b] hover:underline"
          >
            Xem thêm bình luận
          </button>
        </div>
      )}
      
      <div className="border-t border-slate-100 bg-slate-50/50 p-4 sm:p-5">
        <div className="flex gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-slate-300 text-sm font-bold text-white shadow-sm">
            <UserRound size={20} />
          </div>
          <a 
            href={siteConfig.zaloHref} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex h-10 flex-1 items-center rounded-full border border-slate-200 bg-slate-100 px-4 text-[13px] text-slate-500 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            Viết bình luận hoặc đặt xe...
          </a>
        </div>
      </div>
    </div>
  );
}
