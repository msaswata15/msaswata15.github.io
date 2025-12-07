import React from 'react';
import {
  Code,
  Database,
  Server,
  Globe,
  PenTool,
  Brain,
  Award,
  BookOpen,
  Users,
  ShoppingCart,
  Lightbulb,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  CheckCircle,
  Heart,
  Star,
  MessageSquare,
  Calendar,
  GraduationCap,
  Trophy,
  Briefcase,
  User,
  AtSign,
  MessageCircle,
  LucideIcon
} from 'lucide-react';

type IconName = string;

export const getIcon = (iconName: IconName, size: number = 24, className: string = '') => {
  const iconMap: Record<IconName, LucideIcon> = {
    Code,
    Database,
    Server,
    Globe,
    Tool: PenTool,
    Brain,
    Award,
    BookOpen,
    Users,
    ShoppingCart,
    Lightbulb,
    Sparkles,
    Mail,
    Phone,
    MapPin,
    Github,
    Linkedin,
    Twitter,
    ExternalLink,
    CheckCircle,
    Heart,
    Star,
    MessageSquare,
    Calendar,
    GraduationCap,
    Trophy,
    Briefcase,
    User,
    AtSign,
    MessageCircle
  };

  const Icon = iconMap[iconName] || Code;
  return <Icon size={size} className={className} />;
};

export default getIcon;
